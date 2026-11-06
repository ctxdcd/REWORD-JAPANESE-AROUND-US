// JAPANESE AROUND US — VOCABULARY DATA
// Main Category -> Subcategory -> Word -> optional alternatives

const A = (term, reading, pronunciation, meaning, usage, tags) =>
    ({ term, reading, pronunciation, meaning, usage, tags });

const W = (english, term, reading, pronunciation, answers, description, image, alternatives = []) =>
    ({ english, term, reading, pronunciation, answers, description, image: "img/words/" + image + ".webp", alternatives });

const S = (id, title, description, words) =>
    ({ id, title, description, words });

const categories = [

{
    id: "home", title: "Home & Living", titleJa: "家と暮らし",
    description: "Rooms, furniture, appliances, and household items.",
    descriptionJa: "部屋、家具、家電、日用品。",
    image: "img/categories/home.webp",
    subcategories: [
        S("rooms", "Rooms & Areas", "The spaces inside a home.", [
            W("Kitchen", "台所", "だいどころ", "daidokoro", ["台所", "だいどころ", "キッチン"], "The room where food is prepared.", "kitchen", [
                A("キッチン", "", "kicchin", "Kitchen.", "A modern loanword, common for Western-style or designed kitchens.", ["Conversational"])
            ]),
            W("Bedroom", "寝室", "しんしつ", "shinshitsu", ["寝室", "しんしつ"], "The room where you sleep.", "bedroom"),
            W("Living room", "リビング", "リビング", "ribingu", ["リビング", "居間", "いま"], "The main room where a family relaxes.", "living-room")
        ]),
        S("furniture", "Furniture", "Things you sit on, sleep on, and eat at.", [
            W("Table", "テーブル", "テーブル", "teeburu", ["テーブル"], "A table, such as a dining table.", "table"),
            W("Chair", "椅子", "いす", "isu", ["椅子", "いす", "イス"], "Something you sit on.", "chair"),
            W("Bed", "ベッド", "ベッド", "beddo", ["ベッド"], "A Western-style bed. A futon is 布団.", "bed")
        ]),
        S("appliances", "Household Appliances", "Electric machines used at home.", [
            W("Refrigerator", "冷蔵庫", "れいぞうこ", "reizouko", ["冷蔵庫", "れいぞうこ"], "An appliance that keeps food cold.", "refrigerator"),
            W("Television", "テレビ", "テレビ", "terebi", ["テレビ"], "A TV set.", "television"),
            W("Washing machine", "洗濯機", "せんたくき", "sentakuki", ["洗濯機", "せんたくき"], "A machine for washing clothes.", "washing-machine")
        ]),
        S("household-items", "Household Items", "Small things found in every home.", [
            W("Towel", "タオル", "タオル", "taoru", ["タオル"], "A cloth for drying your body or hands.", "towel"),
            W("Key", "鍵", "かぎ", "kagi", ["鍵", "かぎ", "カギ"], "Used to lock and unlock doors.", "key"),
            W("Trash can", "ごみ箱", "ごみばこ", "gomibako", ["ごみ箱", "ごみばこ", "ゴミ箱"], "A container for rubbish.", "trash-can")
        ])
    ]
},

{
    id: "places", title: "Places & Buildings", titleJa: "場所と建物",
    description: "Public places, buildings, schools, and shops.",
    descriptionJa: "公共の場所、建物、学校、お店。",
    image: "img/categories/places.webp",
    subcategories: [
        S("public-places", "Public Places", "Places everyone can use.", [
            W("Park", "公園", "こうえん", "kouen", ["公園", "こうえん"], "A public green space.", "park"),
            W("Station", "駅", "えき", "eki", ["駅", "えき"], "A place to board trains.", "station"),
            W("Street", "道", "みち", "michi", ["道", "みち"], "A road or path.", "street")
        ]),
        S("buildings", "Buildings & Facilities", "Important public buildings.", [
            W("Hospital", "病院", "びょういん", "byouin", ["病院", "びょういん"], "A place for medical treatment.", "hospital"),
            W("Bank", "銀行", "ぎんこう", "ginkou", ["銀行", "ぎんこう"], "A place to keep and handle money.", "bank"),
            W("Post office", "郵便局", "ゆうびんきょく", "yuubinkyoku", ["郵便局", "ゆうびんきょく"], "A place to send letters and parcels.", "post-office")
        ]),
        S("education", "Educational Places", "Places for study.", [
            W("School", "学校", "がっこう", "gakkou", ["学校", "がっこう"], "A place where students study.", "school"),
            W("University", "大学", "だいがく", "daigaku", ["大学", "だいがく"], "A place for higher education.", "university"),
            W("Library", "図書館", "としょかん", "toshokan", ["図書館", "としょかん"], "A place to read and borrow books.", "library")
        ]),
        S("shops", "Shops & Services", "Where people buy food and eat out.", [
            W("Supermarket", "スーパー", "スーパー", "suupaa", ["スーパー", "スーパーマーケット"], "A large shop selling groceries.", "supermarket"),
            W("Convenience store", "コンビニ", "コンビニ", "konbini", ["コンビニ", "コンビニエンスストア"], "A small shop open long hours.", "convenience-store"),
            W("Restaurant", "レストラン", "レストラン", "resutoran", ["レストラン"], "A place to eat meals.", "restaurant", [
                A("食堂", "しょくどう", "shokudou", "Eatery / Canteen.", "A casual place serving simple meals, or a school or company cafeteria.", ["Neutral"])
            ])
        ])
    ]
},

{
    id: "objects", title: "Everyday Objects", titleJa: "身の回りの物",
    description: "Personal belongings, stationery, accessories, and tools.",
    descriptionJa: "持ち物、文房具、アクセサリー、道具。",
    image: "img/categories/objects.webp",
    subcategories: [
        S("belongings", "Personal Belongings", "Things you carry every day.", [
            W("Wallet", "財布", "さいふ", "saifu", ["財布", "さいふ"], "Holds money and cards.", "wallet"),
            W("Smartphone", "スマートフォン", "スマートフォン", "sumaatofon", ["スマートフォン", "スマホ"], "A mobile phone with apps.", "smartphone", [
                A("スマホ", "", "sumaho", "Smartphone.", "The everyday short form of スマートフォン.", ["Casual", "Conversational"])
            ]),
            W("Bag", "かばん", "かばん", "kaban", ["かばん", "鞄", "カバン"], "A bag for carrying belongings.", "bag")
        ]),
        S("stationery", "Stationery", "Things for writing.", [
            W("Pen", "ペン", "ペン", "pen", ["ペン"], "A tool for writing with ink.", "pen"),
            W("Notebook", "ノート", "ノート", "nooto", ["ノート"], "A book of blank pages for notes.", "notebook"),
            W("Pencil", "鉛筆", "えんぴつ", "enpitsu", ["鉛筆", "えんぴつ"], "A writing tool with graphite lead.", "pencil")
        ]),
        S("accessories", "Accessories", "Things you wear or use with clothes.", [
            W("Glasses", "眼鏡", "めがね", "megane", ["眼鏡", "めがね", "メガネ"], "Worn to help you see.", "glasses"),
            W("Hat", "帽子", "ぼうし", "boushi", ["帽子", "ぼうし"], "Worn on the head.", "hat"),
            W("Umbrella", "傘", "かさ", "kasa", ["傘", "かさ"], "Protects you from rain.", "umbrella")
        ]),
        S("tools", "Tools & Equipment", "Handy tools and devices.", [
            W("Scissors", "はさみ", "はさみ", "hasami", ["はさみ", "鋏", "ハサミ"], "A tool for cutting paper or cloth.", "scissors"),
            W("Hammer", "金槌", "かなづち", "kanazuchi", ["金槌", "かなづち", "ハンマー"], "A tool for hitting nails.", "hammer"),
            W("Camera", "カメラ", "カメラ", "kamera", ["カメラ"], "A device for taking photos.", "camera")
        ])
    ]
},

{
    id: "food", title: "Food & Ingredients", titleJa: "食べ物と食材",
    description: "Fruits, vegetables, meat, meals, and drinks.",
    descriptionJa: "果物、野菜、肉、食事、飲み物。",
    image: "img/categories/food.webp",
    subcategories: [
        S("fruits", "Fruits", "Common fruits.", [
            W("Apple", "りんご", "りんご", "ringo", ["りんご", "林檎", "リンゴ"], "A round fruit, often red.", "apple"),
            W("Banana", "バナナ", "バナナ", "banana", ["バナナ"], "A long yellow fruit.", "banana"),
            W("Strawberry", "いちご", "いちご", "ichigo", ["いちご", "苺", "イチゴ"], "A small red fruit.", "strawberry")
        ]),
        S("vegetables", "Vegetables", "Common vegetables.", [
            W("Potato", "じゃがいも", "じゃがいも", "jagaimo", ["じゃがいも", "ジャガイモ"], "A starchy root vegetable.", "potato"),
            W("Tomato", "トマト", "トマト", "tomato", ["トマト"], "A red, juicy vegetable.", "tomato"),
            W("Onion", "玉ねぎ", "たまねぎ", "tamanegi", ["玉ねぎ", "たまねぎ", "玉葱", "タマネギ"], "A round vegetable with layers.", "onion")
        ]),
        S("meat-seafood", "Meat & Seafood", "Common meat and fish.", [
            W("Chicken (meat)", "鶏肉", "とりにく", "toriniku", ["鶏肉", "とりにく"], "The meat of a chicken.", "chicken-meat"),
            W("Beef", "牛肉", "ぎゅうにく", "gyuuniku", ["牛肉", "ぎゅうにく"], "The meat of a cow.", "beef"),
            W("Fish", "魚", "さかな", "sakana", ["魚", "さかな"], "A fish, or fish as food.", "fish")
        ]),
        S("meals", "Food & Meals", "Staple foods.", [
            W("Rice", "ご飯", "ごはん", "gohan", ["ご飯", "ごはん"], "Cooked rice. It can also mean a meal.", "rice"),
            W("Bread", "パン", "パン", "pan", ["パン"], "A baked food made from flour.", "bread"),
            W("Noodles", "麺", "めん", "men", ["麺", "めん"], "Long strands of dough, such as ramen or udon.", "noodles")
        ]),
        S("drinks", "Drinks", "Everyday drinks.", [
            W("Tea", "お茶", "おちゃ", "ocha", ["お茶", "おちゃ"], "Usually green tea in Japan.", "tea"),
            W("Coffee", "コーヒー", "コーヒー", "koohii", ["コーヒー", "珈琲"], "A hot drink made from beans.", "coffee"),
            W("Milk", "牛乳", "ぎゅうにゅう", "gyuunyuu", ["牛乳", "ぎゅうにゅう", "ミルク"], "A white drink from cows.", "milk")
        ]),
        S("ingredients", "Ingredients", "Basic cooking ingredients.", [
            W("Egg", "卵", "たまご", "tamago", ["卵", "たまご", "玉子"], "Laid by a chicken, used in cooking.", "egg"),
            W("Salt", "塩", "しお", "shio", ["塩", "しお"], "A white seasoning.", "salt"),
            W("Sugar", "砂糖", "さとう", "satou", ["砂糖", "さとう"], "A sweet seasoning.", "sugar")
        ])
    ]
},

{
    id: "nature", title: "Nature & Environment", titleJa: "自然と環境",
    description: "Weather, landscapes, plants, animals, and the sky.",
    descriptionJa: "天気、風景、植物、動物、空。",
    image: "img/categories/nature.webp",
    subcategories: [
        S("weather", "Weather", "What it is like outside.", [
            W("Rain", "雨", "あめ", "ame", ["雨", "あめ"], "Water falling from clouds.", "rain"),
            W("Snow", "雪", "ゆき", "yuki", ["雪", "ゆき"], "Frozen white flakes from the sky.", "snow"),
            W("Wind", "風", "かぜ", "kaze", ["風", "かぜ"], "Moving air.", "wind")
        ]),
        S("landscapes", "Landscapes", "Large natural features.", [
            W("Mountain", "山", "やま", "yama", ["山", "やま"], "A very high landform.", "mountain"),
            W("Sea", "海", "うみ", "umi", ["海", "うみ"], "The large body of salt water.", "sea"),
            W("River", "川", "かわ", "kawa", ["川", "かわ"], "Flowing water on land.", "river")
        ]),
        S("plants", "Plants & Flowers", "Things that grow.", [
            W("Tree", "木", "き", "ki", ["木", "き"], "A tall plant with a trunk.", "tree"),
            W("Flower", "花", "はな", "hana", ["花", "はな"], "The colourful part of a plant.", "flower"),
            W("Grass", "草", "くさ", "kusa", ["草", "くさ"], "Low green plants.", "grass")
        ]),
        S("animals", "Animals", "Familiar animals.", [
            W("Dog", "犬", "いぬ", "inu", ["犬", "いぬ"], "A common pet.", "dog"),
            W("Cat", "猫", "ねこ", "neko", ["猫", "ねこ"], "A common pet.", "cat"),
            W("Bird", "鳥", "とり", "tori", ["鳥", "とり"], "An animal with wings and feathers.", "bird")
        ]),
        S("elements", "Natural Elements", "Things in the sky and earth.", [
            W("Sun", "太陽", "たいよう", "taiyou", ["太陽", "たいよう"], "The star that lights our day.", "sun"),
            W("Moon", "月", "つき", "tsuki", ["月", "つき"], "Seen in the night sky.", "moon"),
            W("Star", "星", "ほし", "hoshi", ["星", "ほし"], "A point of light in the night sky.", "star")
        ])
    ]
},

{
    id: "body", title: "Body & Appearance", titleJa: "体と外見",
    description: "Body parts and basic physical features.",
    descriptionJa: "体の部分と基本的な特徴。",
    image: "img/categories/body.webp",
    subcategories: [
        S("head-face", "Head & Face", "Parts of the face.", [
            W("Eye", "目", "め", "me", ["目", "め"], "Used for seeing.", "eye"),
            W("Mouth", "口", "くち", "kuchi", ["口", "くち"], "Used for eating and speaking.", "mouth"),
            W("Ear", "耳", "みみ", "mimi", ["耳", "みみ"], "Used for hearing.", "ear")
        ]),
        S("upper-body", "Upper Body", "From the shoulders to the hands.", [
            W("Hand", "手", "て", "te", ["手", "て"], "At the end of the arm.", "hand"),
            W("Arm", "腕", "うで", "ude", ["腕", "うで"], "Between the shoulder and the hand.", "arm"),
            W("Shoulder", "肩", "かた", "kata", ["肩", "かた"], "Where the arm joins the body.", "shoulder")
        ]),
        S("lower-body", "Lower Body", "From the waist down.", [
            W("Foot / Leg", "足", "あし", "ashi", ["足", "あし"], "Means both the foot and the leg.", "foot"),
            W("Knee", "膝", "ひざ", "hiza", ["膝", "ひざ"], "The joint in the middle of the leg.", "knee"),
            W("Waist", "腰", "こし", "koshi", ["腰", "こし"], "The middle part of the body, around the hips.", "waist")
        ]),
        S("features", "Physical Features", "Basic features of appearance.", [
            W("Hair", "髪", "かみ", "kami", ["髪", "かみ", "髪の毛", "かみのけ"], "Hair on the head.", "hair"),
            W("Skin", "肌", "はだ", "hada", ["肌", "はだ"], "The outer covering of the body.", "skin"),
            W("Height", "身長", "しんちょう", "shinchou", ["身長", "しんちょう"], "How tall a person is.", "height")
        ])
    ]
},

{
    id: "transport", title: "Transportation & Mobility", titleJa: "交通と移動",
    description: "Vehicles and transportation systems.",
    descriptionJa: "乗り物と交通。",
    image: "img/categories/transport.webp",
    subcategories: [
        S("public-transport", "Public Transportation", "Shared ways to travel.", [
            W("Train", "電車", "でんしゃ", "densha", ["電車", "でんしゃ"], "An electric train.", "train"),
            W("Bus", "バス", "バス", "basu", ["バス"], "A large road vehicle for many people.", "bus"),
            W("Subway", "地下鉄", "ちかてつ", "chikatetsu", ["地下鉄", "ちかてつ"], "A train that runs underground.", "subway")
        ]),
        S("road-vehicles", "Road Vehicles", "Vehicles on the road.", [
            W("Car", "車", "くるま", "kuruma", ["車", "くるま", "自動車", "じどうしゃ"], "A common road vehicle.", "car", [
                A("自動車", "じどうしゃ", "jidousha", "Automobile.", "A more formal word, used in writing and official contexts.", ["Formal", "Written"])
            ]),
            W("Bicycle", "自転車", "じてんしゃ", "jitensha", ["自転車", "じてんしゃ"], "A two-wheeled vehicle with pedals.", "bicycle"),
            W("Motorcycle", "バイク", "バイク", "baiku", ["バイク", "オートバイ"], "A two-wheeled vehicle with an engine.", "motorcycle")
        ]),
        S("other-vehicles", "Other Vehicles", "Travel by air and water.", [
            W("Airplane", "飛行機", "ひこうき", "hikouki", ["飛行機", "ひこうき"], "A vehicle that flies.", "airplane"),
            W("Ship", "船", "ふね", "fune", ["船", "ふね"], "A vehicle that travels on water.", "ship"),
            W("Taxi", "タクシー", "タクシー", "takushii", ["タクシー"], "A car you hire for a trip.", "taxi")
        ]),
        S("facilities", "Transportation Facilities", "Where travel begins and ends.", [
            W("Airport", "空港", "くうこう", "kuukou", ["空港", "くうこう"], "Where planes take off and land.", "airport"),
            W("Bus stop", "バス停", "バスてい", "basutei", ["バス停", "バスてい"], "Where you wait for a bus.", "bus-stop"),
            W("Ticket", "切符", "きっぷ", "kippu", ["切符", "きっぷ"], "Needed to ride a train or bus.", "ticket", [
                A("チケット", "", "chiketto", "Ticket.", "Used for events and flights more than train tickets.", ["Conversational"])
            ])
        ])
    ]
}

];