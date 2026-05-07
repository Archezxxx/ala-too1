export type Lang = "ky" | "ru" | "en" | "zh";

export const LANGS: { code: Lang; label: string; short: string }[] = [
  { code: "ky", label: "Кыргызча", short: "KG" },
  { code: "ru", label: "Русский", short: "RU" },
  { code: "en", label: "English", short: "EN" },
  { code: "zh", label: "中文", short: "ZH" },
];

export type RoomKey = "standard" | "lux" | "family";

export const ROOMS: {
  key: RoomKey;
  price: number;
  capacity: number;
  beds: number;
  size: number;
}[] = [
  { key: "standard", price: 2500, capacity: 2, beds: 1, size: 22 },
  { key: "lux", price: 5500, capacity: 2, beds: 1, size: 38 },
  { key: "family", price: 4200, capacity: 4, beds: 2, size: 32 },
];

type Dict = {
  nav: { rooms: string; about: string; amenities: string; contact: string; book: string };
  hero: {
    eyebrow: string;
    title1: string;
    title2: string;
    subtitle: string;
    cta: string;
    secondary: string;
  };
  about: { eyebrow: string; title: string; body: string; stats: { years: string; rooms: string; rating: string } };
  rooms: {
    eyebrow: string;
    title: string;
    subtitle: string;
    perNight: string;
    bookBtn: string;
    capacity: string;
    beds: string;
    size: string;
    names: Record<RoomKey, string>;
    descriptions: Record<RoomKey, string>;
    features: Record<RoomKey, string[]>;
  };
  amenities: { eyebrow: string; title: string; items: { title: string; desc: string }[] };
  booking: {
    title: string;
    subtitle: string;
    room: string;
    checkIn: string;
    checkOut: string;
    nights: string;
    guests: string;
    name: string;
    namePlaceholder: string;
    submit: string;
    pickDate: string;
    night: string;
    nights2: string;
    nights5: string;
    guest: string;
    guests2: string;
    guests5: string;
    total: string;
    fillName: string;
    fillDates: string;
    waMessage: (p: { name: string; room: string; checkIn: string; checkOut: string; nights: number; guests: number; total: number }) => string;
  };
  contact: {
    eyebrow: string;
    title: string;
    address: string;
    addressValue: string;
    phone: string;
    phoneValue: string;
    hours: string;
    hoursValue: string;
    whatsapp: string;
  };
  reviews: { eyebrow: string; title: string; summary: string; items: { name: string; text: string }[] };
  location: { eyebrow: string; title: string; googleMaps: string; appleMaps: string; twoGis: string; yandexMaps: string };
  footer: { tagline: string; rights: string };
};

const ru: Dict = {
  nav: { rooms: "Номера", about: "О нас", amenities: "Удобства", contact: "Контакты", book: "Забронировать" },
  hero: {
    eyebrow: "Баткен · Кыргызстан",
    title1: "Ала-Тоо",
    title2: "Тёплый горный приём",
    subtitle: "Уютная гостиница в сердце города Раззаков. Виды на хребты Памиро-Алая, искреннее гостеприимство и комфорт в каждой детали.",
    cta: "Выбрать номер",
    secondary: "Узнать больше",
  },
  about: {
    eyebrow: "О гостинице",
    title: "Дом у подножия гор",
    body: "Ала-Тоо — это место, где традиционное кыргызское гостеприимство встречается с современным комфортом. Мы создаём атмосферу, в которой хочется задержаться: тёплое дерево, мягкий свет, домашний завтрак и виды, ради которых стоит просыпаться раньше.",
    stats: { years: "лет с гостями", rooms: "уютных номеров", rating: "средний рейтинг" },
  },
  rooms: {
    eyebrow: "Размещение",
    title: "Наши номера",
    subtitle: "Три формата для одного, двоих или всей семьи — выберите свой.",
    perNight: "сом / ночь",
    bookBtn: "Забронировать",
    capacity: "гостей",
    beds: "кровати",
    size: "м²",
    names: { standard: "Стандарт", lux: "Люкс", family: "Семейный" },
    descriptions: {
      standard: "Уютный номер с двуспальной кроватью, видом на горы и всем необходимым для спокойного отдыха.",
      lux: "Просторный люкс с камином, мягкой зоной отдыха и панорамным окном на хребты Алайского массива.",
      family: "Светлый семейный номер с двумя кроватями — идеален для родителей с детьми и небольших компаний.",
    },
    features: {
      standard: ["Wi-Fi", "Завтрак", "Тёплый пол", "Душ"],
      lux: ["Камин", "Wi-Fi", "Мини-бар", "Ванна", "Завтрак"],
      family: ["2 кровати", "Wi-Fi", "Завтрак", "Чайник"],
    },
  },
  amenities: {
    eyebrow: "Удобства",
    title: "Всё для вашего комфорта",
    items: [
      { title: "Завтрак включён", desc: "Домашний кыргызский завтрак каждое утро." },
      { title: "Бесплатный Wi-Fi", desc: "Скоростной интернет во всех номерах и общих зонах." },
      { title: "Парковка", desc: "Закрытая парковка для гостей гостиницы." },
      { title: "Трансфер", desc: "Встреча и проводы из аэропорта по запросу." },
      { title: "Экскурсии", desc: "Туры в горы Баткена и к местным достопримечательностям." },
      { title: "Круглосуточно", desc: "Ресепшн и охрана 24/7 для вашего спокойствия." },
    ],
  },
  booking: {
    title: "Бронирование",
    subtitle: "Заполните детали — мы продолжим в WhatsApp.",
    room: "Номер",
    checkIn: "Заезд",
    checkOut: "Выезд",
    nights: "Ночей",
    guests: "Гостей",
    name: "Ваше имя",
    namePlaceholder: "Как к вам обращаться",
    submit: "Забронировать через WhatsApp",
    pickDate: "Выберите дату",
    night: "ночь",
    nights2: "ночи",
    nights5: "ночей",
    guest: "гость",
    guests2: "гостя",
    guests5: "гостей",
    total: "Итого",
    fillName: "Пожалуйста, укажите имя",
    fillDates: "Пожалуйста, выберите даты",
    waMessage: ({ name, room, checkIn, checkOut, nights, guests, total }) =>
      `Здравствуйте! Я хотел(а) бы забронировать номер в гостинице Ала-Тоо.\n\n• Имя: ${name}\n• Номер: ${room}\n• Заезд: ${checkIn}\n• Выезд: ${checkOut}\n• Ночей: ${nights}\n• Гостей: ${guests}\n• Сумма: ${total} сом\n\nСпасибо!`,
  },
  contact: {
    eyebrow: "Контакты",
    title: "Будем рады видеть вас",
    address: "Адрес",
    addressValue: "ул. Кошмуратова, 21, г. Раззаков",
    phone: "Телефон",
    phoneValue: "+996 777 00 44 69",
    hours: "Ресепшн",
    hoursValue: "Круглосуточно, 24/7",
    whatsapp: "Написать в WhatsApp",
  },
  reviews: {
    eyebrow: "Отзывы",
    title: "Что говорят гости",
    summary: "Рейтинг на основе отзывов в 2GIS",
    items: [
      { name: "Алексей", text: "Останавливался в отеле во время командировки. Чистые и уютные номера, спокойная обстановка, вежливый персонал. Удобное расположение и всё необходимое для комфортного проживания. Рекомендую." },
      { name: "Айнура", text: "Очень понравилось 😍 Красиво, чисто и уютно. Персонал очень приветливый и вежливый. Прям чувствуется домашний уют и тепло! Буду останавливаться только здесь." },
      { name: "John D.", text: "Провели здесь 4 ночи по работе, и должен сказать, всё было превосходно. Расположение отличное, комната очень комфортная. Администратор был невероятно дружелюбен и готов помочь." }
    ]
  },
  location: {
    eyebrow: "Расположение",
    title: "Как нас найти",
    googleMaps: "Google Карты",
    appleMaps: "Apple Maps",
    twoGis: "2GIS",
    yandexMaps: "Яндекс Карты",
  },
  footer: { tagline: "Тёплый горный приём в сердце Баткена.", rights: "Все права защищены." },
};

const ky: Dict = {
  nav: { rooms: "Бөлмөлөр", about: "Биз жөнүндө", amenities: "Кызматтар", contact: "Байланыш", book: "Брондоо" },
  hero: {
    eyebrow: "Баткен · Кыргызстан",
    title1: "Ала-Тоо",
    title2: "Тоолуу жылуу тосуу",
    subtitle: "Раззаков шаарынын жүрөгүндөгү жайлуу мейманкана. Памир-Алай тоолорунун көрүнүшү, чын жүрөктөн тосуп алуу жана ар бир деталда ыңгайлуулук.",
    cta: "Бөлмө тандоо",
    secondary: "Көбүрөөк билүү",
  },
  about: {
    eyebrow: "Мейманкана жөнүндө",
    title: "Тоонун этегиндеги үй",
    body: "Ала-Тоо — салттуу кыргыз меймандостугу заманбап ыңгайлуулук менен айкалышкан жер. Биз сизди калгысы келтирген аура түзөбүз: жылуу жыгач, жумшак жарык, үй тамактанышы жана эртең менен эрте ойгонгуңуз келген көрүнүштөр.",
    stats: { years: "жыл коноктор менен", rooms: "жайлуу бөлмө", rating: "орточо рейтинг" },
  },
  rooms: {
    eyebrow: "Жайгашуу",
    title: "Биздин бөлмөлөр",
    subtitle: "Бирөө, экөө же бүт үй-бүлө үчүн үч формат — өзүңүздүн тандаңыз.",
    perNight: "сом / түн",
    bookBtn: "Брондоо",
    capacity: "конок",
    beds: "керебет",
    size: "м²",
    names: { standard: "Стандарт", lux: "Люкс", family: "Үй-бүлөлүк" },
    descriptions: {
      standard: "Эки кишилик керебет, тоо көрүнүшү жана тынч эс алуу үчүн бардык керектүү нерселери бар жайлуу бөлмө.",
      lux: "Каминдүү, жумшак эс алуу аймагы жана Алай тоолоруна панорамалык терезеси бар кенен люкс.",
      family: "Эки керебеттүү жарык үй-бүлөлүк бөлмө — балдар менен ата-энелерге жана чакан компанияларга идеалдуу.",
    },
    features: {
      standard: ["Wi-Fi", "Эртең мененки тамак", "Жылуу пол", "Душ"],
      lux: ["Камин", "Wi-Fi", "Мини-бар", "Ванна", "Эртең мененки тамак"],
      family: ["2 керебет", "Wi-Fi", "Эртең мененки тамак", "Чайнек"],
    },
  },
  amenities: {
    eyebrow: "Кызматтар",
    title: "Сиздин ыңгайлуулугуңуз үчүн баары",
    items: [
      { title: "Эртең мененки тамак кошулган", desc: "Ар күнү үй кыргыз эртең мененки тамагы." },
      { title: "Акысыз Wi-Fi", desc: "Бардык бөлмөлөрдө жана жалпы аймактарда тез интернет." },
      { title: "Унаа токтотуучу жай", desc: "Конокторго жабык унаа токтотуучу жай." },
      { title: "Трансфер", desc: "Суроо боюнча аэропорттон тосуп алуу жана узатуу." },
      { title: "Экскурсиялар", desc: "Баткен тоолоруна жана жергиликтүү жайларга турлар." },
      { title: "Күнү-түнү", desc: "Тынчтыгыңыз үчүн ресепшн жана коопсуздук 24/7." },
    ],
  },
  booking: {
    title: "Брондоо",
    subtitle: "Маалыматты толтуруңуз — биз WhatsApp'та улантабыз.",
    room: "Бөлмө",
    checkIn: "Келүү",
    checkOut: "Кетүү",
    nights: "Түн",
    guests: "Конок",
    name: "Атыңыз",
    namePlaceholder: "Сизге кантип кайрылабыз",
    submit: "WhatsApp аркылуу брондоо",
    pickDate: "Күндү тандаңыз",
    night: "түн",
    nights2: "түн",
    nights5: "түн",
    guest: "конок",
    guests2: "конок",
    guests5: "конок",
    total: "Жалпы",
    fillName: "Атыңызды жазыңыз",
    fillDates: "Күндөрдү тандаңыз",
    waMessage: ({ name, room, checkIn, checkOut, nights, guests, total }) =>
      `Салам! Мен Ала-Тоо мейманканасынан бөлмө брондогум келет.\n\n• Аты: ${name}\n• Бөлмө: ${room}\n• Келүү: ${checkIn}\n• Кетүү: ${checkOut}\n• Түн: ${nights}\n• Конок: ${guests}\n• Сумма: ${total} сом\n\nРахмат!`,
  },
  contact: {
    eyebrow: "Байланыш",
    title: "Сизди күтөбүз",
    address: "Дарек",
    addressValue: "Кошмуратов көч., 21, Раззаков ш.",
    phone: "Телефон",
    phoneValue: "+996 777 00 44 69",
    hours: "Ресепшн",
    hoursValue: "Күнү-түнү, 24/7",
    whatsapp: "WhatsApp'ка жазуу",
  },
  reviews: {
    eyebrow: "Пикирлер",
    title: "Коноктор эмне дешет",
    summary: "2GIS пикирлеринин негизиндеги рейтинг",
    items: [
      { name: "Алексей", text: "Командировка учурунда ушул мейманканада токтодум. Таза жана жайлуу бөлмөлөр, тынч атмосфера, сылык кызматкерлер. Ыңгайлуу жайгашкан жана жашоо үчүн бардык шарттар бар. Сунуштайм." },
      { name: "Айнура", text: "Аябай жакты 😍 Кооз, таза жана жайлуу. Кызматкерлер абдан сылык жана жылуу тосуп алышты. Кадимкидей үйдөгүдөй жылуулук сезилет! Эми ушул жерге гана токтойм." },
      { name: "John D.", text: "Бул жерде жумуш менен 4 түн болдук, баары сонун болду деп айта алам. Жайгашкан жери эң сонун, бөлмө абдан ыңгайлуу. Администратор өтө достук мамиледе жана жардам берүүгө даяр." }
    ]
  },
  location: {
    eyebrow: "Жайгашкан жери",
    title: "Бизди кантип тапса болот",
    googleMaps: "Google Карталар",
    appleMaps: "Apple Maps",
    twoGis: "2GIS",
    yandexMaps: "Яндекс Карталар",
  },
  footer: { tagline: "Баткендин жүрөгүндөгү тоолуу жылуу тосуу.", rights: "Бардык укуктар корголгон." },
};

const en: Dict = {
  nav: { rooms: "Rooms", about: "About", amenities: "Amenities", contact: "Contact", book: "Book now" },
  hero: {
    eyebrow: "Batken · Kyrgyzstan",
    title1: "Ala-Too",
    title2: "A warm mountain welcome",
    subtitle: "A boutique hotel in the heart of Razzakov. Pamir-Alay views, sincere hospitality and comfort in every detail.",
    cta: "Choose a room",
    secondary: "Discover more",
  },
  about: {
    eyebrow: "About the hotel",
    title: "A home at the foot of the mountains",
    body: "Ala-Too is where traditional Kyrgyz hospitality meets modern comfort. We create an atmosphere you won't want to leave: warm wood, soft light, homemade breakfast and views worth waking up early for.",
    stats: { years: "years with guests", rooms: "cozy rooms", rating: "average rating" },
  },
  rooms: {
    eyebrow: "Stay",
    title: "Our rooms",
    subtitle: "Three formats — for one, two or the whole family.",
    perNight: "KGS / night",
    bookBtn: "Book",
    capacity: "guests",
    beds: "beds",
    size: "m²",
    names: { standard: "Standard", lux: "Lux Suite", family: "Family Room" },
    descriptions: {
      standard: "A cozy room with a queen bed, mountain view and everything you need for a peaceful stay.",
      lux: "A spacious suite with a fireplace, lounge area and panoramic window facing the Alay range.",
      family: "A bright family room with two beds — perfect for parents with children or small groups.",
    },
    features: {
      standard: ["Wi-Fi", "Breakfast", "Heated floor", "Shower"],
      lux: ["Fireplace", "Wi-Fi", "Mini-bar", "Bathtub", "Breakfast"],
      family: ["2 beds", "Wi-Fi", "Breakfast", "Kettle"],
    },
  },
  amenities: {
    eyebrow: "Amenities",
    title: "Everything for your comfort",
    items: [
      { title: "Breakfast included", desc: "Homemade Kyrgyz breakfast every morning." },
      { title: "Free Wi-Fi", desc: "Fast internet in all rooms and public areas." },
      { title: "Parking", desc: "Secure parking for our guests." },
      { title: "Transfer", desc: "Airport pickup and drop-off on request." },
      { title: "Excursions", desc: "Tours in the Batken mountains and nearby sights." },
      { title: "24/7 reception", desc: "Front desk and security around the clock." },
    ],
  },
  booking: {
    title: "Reservation",
    subtitle: "Fill in the details — we'll continue on WhatsApp.",
    room: "Room",
    checkIn: "Check-in",
    checkOut: "Check-out",
    nights: "Nights",
    guests: "Guests",
    name: "Your name",
    namePlaceholder: "How should we call you",
    submit: "Book via WhatsApp",
    pickDate: "Pick a date",
    night: "night",
    nights2: "nights",
    nights5: "nights",
    guest: "guest",
    guests2: "guests",
    guests5: "guests",
    total: "Total",
    fillName: "Please enter your name",
    fillDates: "Please choose the dates",
    waMessage: ({ name, room, checkIn, checkOut, nights, guests, total }) =>
      `Hello! I would like to book a room at Ala-Too Hotel.\n\n• Name: ${name}\n• Room: ${room}\n• Check-in: ${checkIn}\n• Check-out: ${checkOut}\n• Nights: ${nights}\n• Guests: ${guests}\n• Total: ${total} KGS\n\nThank you!`,
  },
  contact: {
    eyebrow: "Contact",
    title: "We'd love to host you",
    address: "Address",
    addressValue: "21 Koshmuratov St, Razzakov city",
    phone: "Phone",
    phoneValue: "+996 777 00 44 69",
    hours: "Reception",
    hoursValue: "Open 24/7",
    whatsapp: "Message on WhatsApp",
  },
  reviews: {
    eyebrow: "Reviews",
    title: "What our guests say",
    summary: "Rating based on 2GIS reviews",
    items: [
      { name: "Alexey", text: "Stayed at the hotel during a business trip. Clean and cozy rooms, peaceful atmosphere, polite staff. Convenient location and everything needed for a comfortable stay. Highly recommended." },
      { name: "Ainura", text: "Loved it 😍 Beautiful, clean and cozy. The staff is very friendly and polite. You can really feel the warmth and comfort of home! Will only stay here from now on." },
      { name: "John D.", text: "We spent 4 nights here on business and everything was excellent. The location is great, the room is surprisingly comfortable. The receptionist was very friendly and extremely helpful." }
    ]
  },
  location: {
    eyebrow: "Location",
    title: "How to find us",
    googleMaps: "Google Maps",
    appleMaps: "Apple Maps",
    twoGis: "2GIS",
    yandexMaps: "Yandex Maps",
  },
  footer: { tagline: "A warm mountain welcome in the heart of Batken.", rights: "All rights reserved." },
};

const zh: Dict = {
  nav: { rooms: "客房", about: "关于我们", amenities: "设施", contact: "联系方式", book: "立即预订" },
  hero: {
    eyebrow: "巴特肯 · 吉尔吉斯斯坦",
    title1: "Ala-Too",
    title2: "温暖的高山欢迎",
    subtitle: "位于拉扎科夫市中心的精品酒店。帕米尔-阿赖山脉的美景，真诚的待客之道，每一处细节都体现出舒适。",
    cta: "选择客房",
    secondary: "了解更多",
  },
  about: {
    eyebrow: "关于酒店",
    title: "山脚下的家",
    body: "Ala-Too 是传统吉尔吉斯好客之道与现代舒适感相遇的地方。我们营造出让您流连忘返的氛围：温暖的木质装饰、柔和的灯光、自制早餐以及值得早起的风景。",
    stats: { years: "年接待经验", rooms: "间温馨客房", rating: "平均评分" },
  },
  rooms: {
    eyebrow: "住宿",
    title: "我们的客房",
    subtitle: "三种房型 — 适合单人、双人或全家入住。",
    perNight: "索姆 / 晚",
    bookBtn: "预订",
    capacity: "位客人",
    beds: "张床",
    size: "平方米",
    names: { standard: "标准间", lux: "豪华套房", family: "家庭套房" },
    descriptions: {
      standard: "温馨的客房，配有一张双人床、山景以及您安静入住所需的一切。",
      lux: "宽敞的套房，配有壁炉、休息区和面向阿赖山脉的全景窗户。",
      family: "明亮的家庭房，配有两张床 — 非常适合带孩子的父母或小型团队入住。",
    },
    features: {
      standard: ["Wi-Fi", "早餐", "地暖", "淋浴"],
      lux: ["壁炉", "Wi-Fi", "迷你吧", "浴缸", "早餐"],
      family: ["2张床", "Wi-Fi", "早餐", "电水壶"],
    },
  },
  amenities: {
    eyebrow: "设施",
    title: "为您提供舒适体验",
    items: [
      { title: "包含早餐", desc: "每天早晨提供自制吉尔吉斯早餐。" },
      { title: "免费 Wi-Fi", desc: "所有客房和公共区域均提供高速互联网。" },
      { title: "停车场", desc: "为我们的客人提供安全停车场。" },
      { title: "接送服务", desc: "可应要求提供机场接送服务。" },
      { title: "短途旅行", desc: "巴特肯山区和附近景点的旅游活动。" },
      { title: "24/7 前台", desc: "全天候前台服务和安保。" },
    ],
  },
  booking: {
    title: "预订",
    subtitle: "填写详细信息 — 我们将在 WhatsApp 上与您联系。",
    room: "客房",
    checkIn: "入住日期",
    checkOut: "退房日期",
    nights: "晚数",
    guests: "客人",
    name: "您的姓名",
    namePlaceholder: "我们该如何称呼您",
    submit: "通过 WhatsApp 预订",
    pickDate: "选择日期",
    night: "晚",
    nights2: "晚",
    nights5: "晚",
    guest: "人",
    guests2: "人",
    guests5: "人",
    total: "总计",
    fillName: "请输入您的姓名",
    fillDates: "请选择日期",
    waMessage: ({ name, room, checkIn, checkOut, nights, guests, total }) =>
      `你好！我想预订 Ala-Too 酒店的客房。\n\n• 姓名: ${name}\n• 客房: ${room}\n• 入住: ${checkIn}\n• 退房: ${checkOut}\n• 晚数: ${nights}\n• 客人: ${guests}\n• 总价: ${total} 索姆\n\n谢谢！`,
  },
  contact: {
    eyebrow: "联系方式",
    title: "我们很乐意接待您",
    address: "地址",
    addressValue: "拉扎科夫市 Koshmuratov 街 21 号",
    phone: "电话",
    phoneValue: "+996 777 00 44 69",
    hours: "前台",
    hoursValue: "24/7 全天候开放",
    whatsapp: "在 WhatsApp 上留言",
  },
  reviews: {
    eyebrow: "住客评价",
    title: "我们的客人怎么说",
    summary: "基于 2GIS 评价的评分",
    items: [
      { name: "Alexey", text: "出差期间入住该酒店。客房干净舒适，环境宁静，工作人员彬彬有礼。地理位置便利，满足舒适住宿的一切需求。强烈推荐。" },
      { name: "Ainura", text: "非常喜欢 😍 漂亮、干净、舒适。工作人员非常热情有礼貌。真的能感受到家的温暖与舒适！以后只会住这里。" },
      { name: "John D.", text: "我们在这里住了4个晚上，一切都非常棒。地理位置优越，房间非常舒适。前台接待员非常友好，乐于助人。" }
    ]
  },
  location: {
    eyebrow: "位置",
    title: "如何找到我们",
    googleMaps: "谷歌地图",
    appleMaps: "Apple Maps",
    twoGis: "2GIS",
    yandexMaps: "Yandex 地图",
  },
  footer: { tagline: "巴特肯中心的温暖高山欢迎。", rights: "版权所有。" },
};

export const DICTS: Record<Lang, Dict> = { ru, ky, en, zh };

export function detectLang(): Lang {
  if (typeof navigator === "undefined") return "ru";
  const stored = (typeof localStorage !== "undefined" && localStorage.getItem("lang")) as Lang | null;
  if (stored && DICTS[stored]) return stored;
  const n = navigator.language.toLowerCase();
  if (n.startsWith("ky") || n.startsWith("kg")) return "ky";
  if (n.startsWith("en")) return "en";
  if (n.startsWith("zh")) return "zh";
  return "ru";
}

// Russian/Kyrgyz plural form
export function plural(n: number, one: string, two: string, five: string) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return two;
  return five;
}
