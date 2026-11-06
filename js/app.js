// REWORD ENGINE — Japanese Around Us
let currentCategory=null,currentSubcategory=null,currentWord=null;
let correctCount=0,incorrectCount=0,feedbackTimer=null,keepKeyboard=false;

const $=id=>document.getElementById(id);
const pages=document.querySelectorAll(".page");
const categoryList=$("categoryList"),subcategoryList=$("subcategoryList"),vocabularyList=$("vocabularyList");
const practicePage=$("practicePage"),answerForm=$("answerForm"),answerInput=$("answerInput");
const submitButton=answerForm.querySelector("button[type='submit']");
const aboutButton=$("aboutButton"),aboutModal=$("aboutModal"),aboutClose=$("aboutClose");

// Keyboard behaviour (kept open while practising)
answerInput.setAttribute("enterkeyhint","send");
answerInput.setAttribute("autocorrect","off");
submitButton.addEventListener("mousedown",e=>e.preventDefault());
answerInput.addEventListener("focus",()=>{keepKeyboard=true});
practicePage.addEventListener("click",e=>{
    if(e.target.closest("#answerForm"))return;
    keepKeyboard=false;answerInput.blur();
});

// About modal
function openAbout(){aboutModal.classList.add("open");aboutModal.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";aboutClose.focus({preventScroll:true})}
function closeAbout(){aboutModal.classList.remove("open");aboutModal.setAttribute("aria-hidden","true");document.body.style.overflow="";aboutButton.focus({preventScroll:true})}
aboutButton.addEventListener("click",openAbout);
aboutClose.addEventListener("click",closeAbout);
aboutModal.addEventListener("click",e=>{if(e.target===aboutModal)closeAbout()});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&aboutModal.classList.contains("open"))closeAbout()});

// Helpers
function createImageHTML(src,alt,size,lazy=true){
    return `<img src="${src}" alt="${alt}" width="${size}" height="${size}" loading="${lazy?"lazy":"eager"}" decoding="async" onerror="this.style.display='none'">`;
}
function el(tag,className,text){
    const n=document.createElement(tag);
    if(className)n.className=className;
    if(text!==undefined)n.textContent=text;
    return n;
}

// Navigation
function showPage(id){
    pages.forEach(p=>p.classList.remove("active"));
    $(id).classList.add("active");
    if(id!=="practicePage"){keepKeyboard=false;answerInput.blur()}
    window.scrollTo({top:0,behavior:id==="practicePage"?"auto":"smooth"});
}
const goHome=()=>showPage("homePage");
const goCategory=()=>showPage("categoryPage");
const goSubcategory=()=>showPage("subcategoryPage");
const goDetail=()=>showPage("detailPage");

const countWords=c=>c.subcategories.reduce((t,s)=>t+s.words.length,0);

function renderCategories(){
    categoryList.innerHTML="";
    categories.forEach(category=>{
        const card=document.createElement("button");
        card.className="category-card";
        card.innerHTML=`
            <div class="category-icon">${createImageHTML(category.image,category.title,104)}</div>
            <div class="category-content"><h3>${category.title}</h3><p>${category.description}</p></div>
            <div class="category-meta">${countWords(category)} words</div>`;
        card.addEventListener("click",()=>openCategory(category.id));
        categoryList.appendChild(card);
    });
    $("categoryCount").textContent=String(categories.length).padStart(2,"0");
}

function openCategory(id){
    currentCategory=categories.find(c=>c.id===id);
    if(!currentCategory)return;
    $("categoryTitle").textContent=currentCategory.title;
    $("categoryDescription").textContent=currentCategory.description;
    subcategoryList.innerHTML="";
    currentCategory.subcategories.forEach(sub=>{
        const card=document.createElement("button");
        card.className="vocabulary-card";
        card.innerHTML=`<div><h3>${sub.title}</h3><p>${sub.words.length} ${sub.words.length===1?"word":"words"}</p></div><span>»</span>`;
        card.addEventListener("click",()=>openSubcategory(sub.id));
        subcategoryList.appendChild(card);
    });
    showPage("categoryPage");
}

function openSubcategory(id){
    currentSubcategory=currentCategory.subcategories.find(s=>s.id===id);
    if(!currentSubcategory)return;
    $("subcategoryTitle").textContent=currentSubcategory.title;
    $("subcategoryDescription").textContent=currentSubcategory.description||"";
    vocabularyList.innerHTML="";
    currentSubcategory.words.forEach((word,i)=>{
        const card=document.createElement("button");
        card.className="vocabulary-card";
        card.innerHTML=`<div><h3>${word.english}</h3><p>Vocabulary ${String(i+1).padStart(2,"0")}</p></div><span>»</span>`;
        card.addEventListener("click",()=>openDetail(word));
        vocabularyList.appendChild(card);
    });
    showPage("subcategoryPage");
}

// Other ways to say (display only)
const ALT_FILTERS=["All","Polite","Extremely Polite","Casual","Conversational"];
let currentFilter="All";
const matchesFilter=(alt,f)=>f==="All"||(alt.tags||[]).includes(f);

function renderFilterChips(){
    const box=$("alternativeFilters");
    box.innerHTML="";
    ALT_FILTERS.forEach(f=>{
        const chip=el("button","filter-chip",f);
        chip.type="button";
        if(f===currentFilter)chip.classList.add("active");
        chip.setAttribute("aria-pressed",String(f===currentFilter));
        chip.addEventListener("click",()=>{currentFilter=f;renderFilterChips();renderAlternativeList()});
        box.appendChild(chip);
    });
}

function renderAlternativeList(){
    const list=$("alternativesList");
    list.innerHTML="";
    const matches=(currentWord.alternatives||[]).filter(a=>matchesFilter(a,currentFilter));
    if(!matches.length){
        list.appendChild(el("div","alt-empty","No "+currentFilter.toLowerCase()+" expressions for \u201C"+currentWord.english+"\u201D yet. Try another filter."));
        return;
    }
    matches.forEach(alt=>{
        const item=el("div","alt-item");
        const head=el("div","alt-head");
        head.appendChild(el("strong","alt-term",alt.term));
        head.appendChild(el("span","alt-pron",alt.reading?alt.reading+" \u00B7 "+alt.pronunciation:alt.pronunciation));
        item.appendChild(head);
        if(alt.tags&&alt.tags.length){
            const tags=el("div","alt-tags");
            alt.tags.forEach(t=>tags.appendChild(el("span","usage-tag",t)));
            item.appendChild(tags);
        }
        [["Meaning",alt.meaning],["Usage",alt.usage]].forEach(([label,text])=>{
            const p=el("p");
            p.appendChild(el("strong","",label));
            p.appendChild(document.createTextNode(text));
            item.appendChild(p);
        });
        list.appendChild(item);
    });
}

function openAlternatives(){
    if(!currentWord||!(currentWord.alternatives||[]).length)return;
    currentFilter="All";
    $("alternativesTitle").textContent="Other Ways to Say \u201C"+currentWord.english+"\u201D";
    renderFilterChips();
    renderAlternativeList();
    showPage("alternativesPage");
}

// Detail page
function openDetail(word){
    currentWord=word;
    $("detailTerm").textContent=word.term;
    $("detailEnglish").textContent=word.english;
    $("detailPronunciation").textContent=word.reading?word.reading+" ("+word.pronunciation+")":word.pronunciation;
    $("detailDescription").textContent=word.description;
    $("detailIllustration").innerHTML=createImageHTML(word.image,word.english,230,false);
    $("altButton").hidden=!(word.alternatives&&word.alternatives.length);
    showPage("detailPage");
}

// Practice
function updateCounters(){
    $("trueCount").textContent=correctCount;
    $("falseCount").textContent=incorrectCount;
}

function startPractice(){
    if(!currentWord)return;
    correctCount=0;incorrectCount=0;
    updateCounters();
    $("practiceEnglish").textContent=currentWord.english;
    answerInput.value="";
    const fb=$("feedback");
    fb.textContent="";fb.className="feedback";
    if(feedbackTimer)clearTimeout(feedbackTimer);
    showPage("practicePage");
    keepKeyboard=true;
    answerInput.focus({preventScroll:true});
}

function normalizeAnswer(a){
    return a.trim().toLowerCase().normalize("NFC").replace(/[.!?。！？]+$/g,"").replace(/\s+/g," ");
}

answerForm.addEventListener("submit",e=>{
    e.preventDefault();
    if(!currentWord)return;
    const user=normalizeAnswer(answerInput.value);
    if(!user){if(keepKeyboard)answerInput.focus({preventScroll:true});return}
    if(feedbackTimer)clearTimeout(feedbackTimer);
    const accepted=currentWord.answers.map(normalizeAnswer);
    const fb=$("feedback");
    if(accepted.includes(user)){
        correctCount++;
        fb.textContent="Correct. Well done!";fb.className="feedback correct";
    }else{
        incorrectCount++;
        fb.textContent="Not quite. Try again!";fb.className="feedback incorrect";
    }
    updateCounters();
    if(keepKeyboard)answerInput.focus({preventScroll:true});
    feedbackTimer=setTimeout(()=>{
        answerInput.value="";
        fb.textContent="";fb.className="feedback";
        if(keepKeyboard)answerInput.focus({preventScroll:true});
    },800);
});

renderCategories();