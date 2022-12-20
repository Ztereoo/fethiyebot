const commands = `
/start - перезапустить бота
/help - МЕНЮ
/transport - транспорт и такси
/food - кафе и рестораны
/out - развлечения и афиша
/services - услуги
/medicine - медицина
/weather - прогноз погоды   
/emergency- экстренные службы в Турции
`
// Текстовые константы
const text1 = `
<code>Погода в Фетхие</code>  <a href="https://www.accuweather.com/ru/tr/fethiye/319475/weather-forecast/319475">ссылка</a> 
`
const text2 = `
<code>Погода в Олюдениз</code>  <a href= "https://www.accuweather.com/tr/tr/oludeniz/319493/weather-forecast/319493">ссылка</a>
`
const text3 = `
<code>Погода в Бабадаг</code>  <a href="https://www.accuweather.com/en/tr/babadag/317697/weather-forecast/317697">ссылка</a>
`
const text4 = `
<b>Как вызвать такси в Фетхие</b> 

 <a href="https://t.me/turkey_transfer_bot"><b>- Через Телеграм бота</b></a>
 
 <b>- Найти жёлтую коробочку</b> на ближайшем столбе, 
нажать один раз зеленую кнопку и терпеливо ждать и 
верить, и ждать и верить, и ждать: они приедут.

 <b>- На точках такси по городу</b> (найдёте по скоплению жёлтых машин)
Можно и просто тормознуть свободную таксишку взмахом руки.

<b>Лайфхак:</b> по своему району/части города возьмите у понравившегося таксиста телефон и заказывайте такси у него, написав ему на Whatsapp.
`
const text5 = `
<b>Трансфер</b> 

- Для поездок в аэропорты и крупные города- Анталия, Мармарис, Бодрум 
есть <a href = "https://t.me/antalya_taxi">оператор в Телеграм</a>

- Подбор транспортных компаний на сайте <a href = "https://www.intui.travel/">Intui travel</a>

- Можно воспользоваться международным сервисом <a href = "https://gettransfer.com/en">Gettransfer.com</a>

`
const text6 =`<b>Автобус в аэропорт Даламан</b>
Информацию и расписание автобусов в аэропорт Даламан и обратно смотрите 
<a href="https://havalimanlari.net/mugla-dalaman-havalimani-havaalani-airport-%D0%B0%D1%8D%D1%80%D0%BE%D0%BF%D0%BE%D1%80%D1%82-flughafen/turkey-mugla-dalaman-airport-public-bus-muttas-dlm-ltbs-airport-muttas-bus-service-dalaman-airport-bus-prices-fee-fares-yda-dalaman-airport-fethiye-marmaris-bus-timetable-bus-service-contact.html">здесь</a>

<b>Автобус Muttaş</b> / 60 мин = 60 лир / отправляется с автовокзала Фетхие в аэропорт Даламан <a href="https://ulasim.muttas.com.tr/sefer-saatleri/?ac=ac&id=73&tur=gidis">информация и расписание</a>

<b>Автобус Havaş</b> <a href = "https://havas.net/en/bus-services">информация и расписание</a>

Из аэропорта в Фетхие автобусы ходят регулярно, их расписание синхронизировано с графиком прилета самолётов.
`
const text7 = `Приложения <b>Kentkart mobil</b>, и <b>Mugla kart</b> 
помогут построить маршрут по городу и найти ближайшую автобусную остановку
<a href = "https://apps.apple.com/tr/developer/kent-kart-ege-elektronik-sanayi-ve-ticaret-a-s/id620440971">Kentkart Appstore</a>
<a href = "https://play.google.com/store/apps/details?id=kentkart.mobile.cordova">Kentkart Google Play</a>
<a href = "https://apps.apple.com/tr/app/mu%C4%9Fla-kart/id1220772502?l=tr">Mugla kart Appstore</a>
<a href = "https://play.google.com/store/apps/details?id=kentkart.mobile.muglakentkart&hl=ru&gl=US">Mugla kart Google Play</a>
`
const text8 = `<b>Расписание междугородних автобусов</b> 
и покупка билетов онлайн на сайте
<a href="https://www.obilet.com/en">Obilet</a>
Мобильное приложение <a href="https://apps.apple.com/app/id596039443">Obilet Appstore</a>
Мобильное приложение <a href="https://play.google.com/store/apps/details?id=com.obilet.androidside&referrer=adjust_reftag%3DcZF5bEpAvx0FJ%26utm_source%3DAndroid%2B-%2BMobileAppsPage">Obilet Google Play</a>
Приложение работает, как агрегатор. Здесь можно заказать авиабилеты, 
забронировать отель, арендовать машину, купить билеты на паром.
`
const text9 = `<b>Аренда автомобилей Garanti</b>
<a href="https://goo.gl/maps/Yw3HSQqNYk3aW5Jq6">📍 на карте</a>
телефон +905377631933 (говорят по английски)
https://www.garenta.com.tr/en/


` 
const text10 =` <b>Аренда скутера Fetcar</b> <a href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x14c04163e1705d39:0x82b306e0144663bb?utm_source=mstt_1&entry=gps&g_ep=CAESBzEwLjQzLjIYACD___________8BKgA%3D" >на карте</a>
телефон +902526121915
www.fetrentacar.com 
`
const text11 = `<b>Собрали системы общественного проката в Фетхие</b>

<b>Фиолетовые Beam</b> - самые свежие и комфортные самокаты с широкой зоной парковки
 <a href = "https://www.ridebeam.com/">сайт</a>

<b>Красные Hop</b> - качественные самокаты, найти такие в городе не составит труда
<a href = "https://hoplagit.com/">сайт</a>

<b>Зелёные Marti</b> - самые многочисленные, но и самые раздолбанные, назвать их комфортабельными сложно
<a href = "https://www.marti.tech/en/">сайт</a>

Для использования нужно установить приложение, зарегистрироваться (понадобится паспорт или икамет) и привязать действующую в Турции банковскую карту.
Приложения есть в AppStore и Google Play, и на сайтах сервисов аренды. Все приложения (и сайты) работают на английском языке.
Стоимость аренды у сервисов почти не различается. Актуальные тарифы и зоны использования можно посмотреть в приложениях (они могут меняться).
`

const text12 = `<b>Уютные места в Фетхие, где готовят хороший кофе </b>

В центре 
<b>Coffee de Madrid</b>
<a href = "https://goo.gl/maps/i6RyCnMUcMtF44Wh9">📍 на карте</a>

В старом городе
<b>KUKİNA CAFERİA</b>
<a href = "https://goo.gl/maps/vJdxsy7dMMSPwVHV7">📍 на карте</a>

Рядом с маринами 
<b>Chez La Vie</b>
<a href = "https://goo.gl/maps/HvwH4NfV1bhM5Px16">📍 на карте</a>

В книжном на главной улице
<b>Kaya Kitabevi</b>
<a href = "https://goo.gl/maps/X7PrheUfQ53ejrZz8">📍 на карте</a>

Любителям сладкого рекомендуем кафе 
<b>Mereng patisserie</b> 
<a href = "https://goo.gl/maps/Lr6Bc9sGUtnzMMew8">📍 на карте</a>

Не совсем в центре
<b>To Be Social House</b>
<a href = "https://goo.gl/maps/FWPq81i65vLhsmvG7">📍 на карте</a>

В районе Calis beach
<b>Fratelli Coffee Roasters Co.</b>
<a href = "https://goo.gl/maps/8sBoCcn39FXvCiCg8">📍 на карте</a>

Вкусные домашние торты по классическим рецептам в 
<b>BarBunn</b> на набережной
<a href = "https://goo.gl/maps/QMmFurYh8VgcjMv77">📍 на карте</a>
очень хороший Тирамису на бисквите, Чизкейк, Медовик, Сан-Себастьян

Настоящий Тирамису на печенье Савоярди в
<b>Ancyra Suites Hotel</b>
<a href = "https://goo.gl/maps/7zBo5HNc2XSUtgNR9">📍 на карте</a>

в районе Foca
<b>GOGO THE EATERY</b>
<a href = "https://goo.gl/maps/EHakYnMBekiCrnST9">📍 на карте</a>

`
const text13 = `<b>Мясные рестораны в Фетхие</b>

На набережной <b>Çarikli Et Restaurant</b>
<a href = "https://goo.gl/maps/DGRyALXQNJvgRnjKA">📍 на карте</a>

<b>Mur-Et Karacabey Kasap Restaurant</b>
<a href = "https://goo.gl/maps/vt3XDkpn8ruYQ2aY6">📍 на карте</a>
`
const text14 = `<b>Проверенная пицца из дровяной печи в Фетхие</b>
<b>La Vie Pizzeria</b>
<a href = "https://goo.gl/maps/LvxEr9oLcdjFWawF9">📍 на карте</a>

В центре Фетхие <b>Pizza Jobs</b> в меню более 30 видов пиццы
<a href = "https://goo.gl/maps/psW7A56coSftevNHA">📍 на карте</a>

В районе Чалыш <b>Gustorante Cafe</b> -пицца и не только
<a href = "https://goo.gl/maps/y36uAubNqkWjCwq16">📍 на карте</a>


`
const text15 =` <b>Завтраки в Фетхие</b>

Традиционный турецкий завтрак с видом на горы в <b>Mur-Et Karacabey</b>
<a href = "https://goo.gl/maps/H2K43zNac4mENKhY9">📍 на карте</a>

Завтрак в центре Фетхие, с аппетитными десертами в <b>Paşa Firini</b>
<a href = "https://goo.gl/maps/Cs5D4YgTCkNmCJvY6">📍 на карте</a>

Уютное место, с креслом-качалкой <b>Chez La Vie</b>
<a href = "https://goo.gl/maps/HvwH4NfV1bhM5Px16">📍 на карте</a>

Cырники, круассаны с яйцом, глютен-фри и веганские блюда в <b>Ardiç Şarküteri</b>, здесь же есть магазинчик полезных продуктов
<a href = "https://goo.gl/maps/Njz5Dp2nfNkhURfr5">📍 на карте</a>

Завтрак с классическим европейским меню <b>To Be Social House</b>
<a href = "https://goo.gl/maps/FWPq81i65vLhsmvG7">📍 на карте</a>

`
const text16 = `Место для романтического ужина <b>Unique Restaurant Fethiye</b> 
Великолепный ресторан для ужинов, расположенный наверху при отеле Unique, с видом на марину. Интересные блюда, отличная морская тарелка для двоих и выбор хорошего вина. Обратите внимание: место Adults Only, детей до 12 лет не допускают.
<a href = "https://goo.gl/maps/RytpyafCBt1sVYmb7">📍 на карте</a>
+905395760145
`
const text17 = `Любителям сладкого рекомендуем кафе <b>Mereng patisserie</b> 
<a href = "https://goo.gl/maps/Lr6Bc9sGUtnzMMew8">📍 на карте</a>
`
const text18 = `Если вы хотите что-то кроме portakal или nar suyu (апельсинового или гранатового сока), <b>İksirci Tezcan</b> -то самое место в городе, где делают самые разные фреши:
<a href = "https://goo.gl/maps/hRiB2seAEgn6pzAMA">📍 на карте</a>
Местечко находится в центре, где угол набережных.
Здесь могут смешать соки по вашему желанию. И да, апельсиновые и гранатовые у них тоже есть.
`
const text19 = `Центральный рынок Фетхие <b>Fethiye Cuma Pazari</b>
Колоритный турецкий рынок. За свежими фруктами, овощами и сырами- исключительно сюда. Продуктами здесь все на заканчивается, реплики "Hillfiger", "Gucci" и "Dior" есть в вещевой части
рынка, здесь же можно купить посуду для дома и турецкий текстиль. А в уличном кафе отведать гезлеме- тончайшие лепешки с мясом, сыром и другими начинками.    
Рынок работает два раза в неделю, по вторникам и пятницам.
<a href = "https://goo.gl/maps/1Z97JyvvypxbcucG6">📍 на карте</a>

`
const text200 = `
<b>Яхтинг</b> 
Яхтинг с Sailmates

Путешествия под парусом, новые открытия, интересные истории и лайфхаки — телеграм-канал Sailmates с анонсами и доступными датами.

▫️ недельные походы на парусных яхтах к берегам Ликийского царства 
▫️ дружеские регаты 
▫️ услуги шкипера (парусные яхты и катамараны)
▫️ проверенные капитаны с рекомендациями для вашей команды 
▫️ помощь в подборе и аренде яхты
▫️ разработка маршрутов и программ
▫️ safety skipper (сопровождающий шкипер для начинающих капитанов)
▫️ инструкторские программы skill up

На связи инди-капитан <a href="https://t.me/koleso_kolesiko">Саша Колесников</a>

<a href="https://t.me/sailmates/124">Канал Sailmates</a>
`


const text20 = `
<b>Археологический музей</b> 
<a>Никаких сувенирных лавок, суровых бабушек и гнусавых экскурсоводов. Гуляй и наслаждайся: два зала и небольшая плотная экспозиция на улице. Представлены находки разных эпох, от Ликии до Византии. Вход бесплатный.</a>
<a href="https://goo.gl/maps/CxtpnNXy1XnKQ8tZ9">смотреть на карте</a>
`

const text21 = `
<b>Aksin Cinema кинотеатр в центре Фетхие, в торговом центре Erasta</b>  <a href="https://biletinial.com/mekan/fethiye-erasta-sinemasi">
Билеты и расписание здесь</a>
`
const text22 = `
<b>Киноклуб Кин-дза-дза, здесь показывают кино на русском. Кинопоказы по средам в 19.30(на всякий случай уточняйте время)</b>
  <a href="https://t.me/kindzadza1984">Канал клуба в Telegram</a>
`
const text23 = `
<b>Cообщество любителей прокатиться с ветерком, также объявления о продаже, советы, ремонт</b> 
 <a href="https://t.me/velo_fethyie">Канал сообщества в Telegram</a>
`
const text24 = `
<b>В Фетхие можно полетать на парапланах в самом красивом месте Турции — над Ölüdeniz!
</b>  <a href="https://www.google.com/maps/place/%C3%96l%C3%BCdeniz+Mah,+Sky+Sports+Paragliding+-+Paragliding,+%C3%87ar%C5%9F%C4%B1+Cd.,+48340+Fethiye%2FMu%C4%9Fla/data=!4m2!3m1!1s0x14c040a5c5f8aecb:0x48d3a33b60a0e642?utm_source=mstt_1&entry=gps&lucs=karto&g_ep=CAESCjExLjU3LjQ4MDEYACCIJyoFa2FydG8%3D">ссылка на карту</a>
<b>Sky Sports Paragliding
+90 252 617 05 11
</b>
`
const text25 = `
<b>Канал для тех, кто любит волейбол</b>  
<a href="https://t.me/+x6l_cHUxCyMyYjc6 ">Перейти в канал</a>
`
const text26 = `
<b>Карта Ликийской тропы</b>  
<a href="https://www.google.com/maps/d/viewer?mid=1s2LvKNkI5LLMLq7otoIKdgd5_MENxLQ&ll=36.51463540677625%2C29.62170644335938&z=9
">смотреть на карте</a>
`
const text27 = `
<b>Боди-балет и и занятия стретчингом в Фетхие</b>
  <a href="https://t.me/+4aCYw2mrTsEyNTJi
">группа Тимы Суркина </a>
`
const text28 = `
<b>Бильярдный клуб Irmak bilaedo salonu</b>  
<a href="https://goo.gl/maps/LN7pce32jsWqUFeDA 
">смотреть на карте</a>
`
const text29 = `Стадион <b>Fethiye City Stadium</b>
Домашний стадион клуба Fethiye Spor, играют по субботам и воскресеньям.
Расписание матчей смотрите в <a href="https://www.instagram.com/fethiyespor">Instagram команды</a>
Стадион <a href = "https://goo.gl/maps/YrAYJbKTUJGf4Gb36">📍 на карте</a>
`
const text30 = `<b>Муниципальные курсы турецкого языка </b>
 <a href = "https://fethiyehalkegitim.meb.k12.tr/">Ссылка на курсы</a>
`
const text31 = `<b>ФотоАтелье Bekir Çetin Fotoğrafçılık </b>
Приветливый хозяин турок, который говорит по-английски. Здесь можно сделать любые фото на документы.
 <a href = "https://www.bekircetin.com/">Ссылка на сайт</a>
 <a href = "https://goo.gl/maps/tnvg2HyjmXVCC4cS6">Посмотреть на карте</a>
`
const text32 = `<b>Лучший цветочный в нашем городе! Yonca Çiçek Fethiye.</b>
Хозяин собирает прекрасные букеты и свободно говорит на английском.
 <a href = "https://maps.app.goo.gl/rwA7smvZjY8vV4nx5">Посмотреть на карте</a>
`
const text33 = `<b>График отключения электричества</b>
<a href = "https://guncelkesintiler.com/mugla/fethiye/elektrik-kesintisi/">Смотреть по ссылке</a>
<b>Бот в телеграм, где можно подписаться на уведомления, выбрав свою улицу</b>
 <a href = "https://t.me/electricity_turkey_bot">Ссылка</a>
`
const text34 = `<b>Ремонт чемоданов, сумок и обуви в центре города Ayakkabı Doktoru</b>
 <a href = "https://goo.gl/maps/tdHm9ebSfx541HWaA">Посмотреть на карте</a>
`
const text35 = `<b>Ремонт ноутбуков и компьютеров- Bilgisayar Hastanesi</b>
Проверено ✅
Прямо напротив ТЦ Erasta. Ребята не говорят по-английски, но дело своё знают хорошо. Аккуратно и по адекватным ценам.
 <a href = "https://goo.gl/maps/PZqsJykbDNCZvXb76">Посмотреть на карте</a>
`
const text36 = `<b>Ремонт смартфонов недалеко от ТЦ Erasta</b>
WhatsaApp +90 535 395 75 59, можно писать на английском
`

const text37 = `<b>Хозяйственный магазин Koçtaş Fix</b>
 <a href = "https://goo.gl/maps/vWn1aNnvrPLMazha6">Посмотреть на карте</a>
`
const text38 = `<b>Доставка воды и газа Ipragaz</b>
Писать в Whatsapp на турецком языке (мы пользуемся переводчиком), оплата наличными
Номер WhatsaApp +90 541 614 23 23
`
const text39 = `<b>Курьеры в Турции, телеграм канал по поиску курьеров</b>
<a href = "https://t.me/KuryerTurkey">Ссылка на канал</a>
`
const text40 = `<b>Аналоги названий привычных лекарств в Турции</b>

<b>Для детей:</b>
Ибупрофен - Pedifen Dolven İbu-fort
Парацетамол - Calpol Parol Minoset
Комбинированные препараты - İburamin cold  Peditus
Пробиотики - Maflor Reflor 
Энтеросептики - Ercefuryl Diafuryl 
Весовую и возрастную дозировку вам легко подскажет фармацевт в аптеке. 

<b>Для взрослых:</b>
Парацетамол - Parol 
Ибупрофен, декскетопрофен и другие НСПВ - Advil Diclomec Dicloflam Arveles Majezik и потяжелее нимесулиды и этодолак Nimes  Etol и пр. спазмолитики - Buscopan Dicetel Spasmomen
Антигистаминные - Allerset Bilaxten 
Циститы и мочевые инфекии - Piyeloseptyl. Monurol и Cipro только рецептурные
Гастроэнтериты: антиэметики - Metpamid  энторосептики Ercefuryl пробиотики Maflor
Конъюнктивиты - Tobradex глазные капли
Наружный отит - ушные капли Siprogut
Миорелаксанты - Muscoril Muscoflex и множество комбинированных препаратов с нестероидными противоспалительными
Локальные гели - Fast jel

<b>!! Антибиотики в Турции без рецепта не продаются</b>

Также рекомендуем пост с полезными ссылками 
<a href = "https://t.me/mersin_russian/272 ">Читать</a>
`
const text41 = `<b>Дежурные аптеки</b>
<a href = "https://www.eczaneler.gen.tr/nobetci-mugla-fethiye">Смотреть список</a>
Приложение Eczanem Nerede, где на карте отмечены все аптеки и отдельно дежурные (сверху выбираете Pharmacies on Duty) 
<a href = "https://www.eczaneler.gen.tr/nobetci-mugla-fethiye">AppStore</a>
<a href = "https://play.google.com/store/apps/details?id=com.basarsoft.eczenemNerede&hl=ru&gl=US">Google Play</a>
`
const text42 = `<b>Cтраховка</b>
<a href = "https://www.e-ikametsigorta.com/">Оформить онлайн</a>
`
const text43 = `<b>Отзывы по врачам</b>
<a href = "https://docs.google.com/spreadsheets/d/1NKeuwFQ1vqnDAwBe-0wX60UrsFwayvYPkmG2jF0hbMw/edit#gid=0">Читать</a>
`
const text44 = `<b>Чат по медицине в Турции</b>
<a href = "https://t.me/tyrciya_medicina">Читать в телеграм</a>
`
const text50 = `<b>Экстренные службы в Турции</b>

<b><a href="tel:+112">112</a></b> — единый телефон для вызова скорой, пожарной и полиции.

<b>157</b> — служба поддержки туристов и иностранных граждан в Турции по всем вопросам! В начале звонка можно выбрать поддержку русскоговорящего оператора.
<b>На этот телефон звонить с турецкого номера!</b>
`
const text51 = `<b> В Турции действуют разные службы охраны правопорядка.</b>

<b>Polis (Полиция)</b> - находится в юрисдикции министерства внутренних дел и, выполняет общие функции, связанные с уголовными и административными правонарушениями. В составе Polis также работает Trafic Polic, которая следит за соблюдением ПДД. 

<b>Zabita (муниципальная полиция)</b> - находится в юрисдикции местной муниципальной власти (мэрии) и следит за соблюдением общественного порядка на местах, мелкими правонарушениями по большей части административного характера: выписывает штрафы за неправильную парковку, за мусор в неположенных местах, и главное в сфере местной торговли (например, если обманули на рынке или в магазине или вы столкнулись с нелегальным бизнесом).

<b>Jandarma (жандармерия)</b> - в Турции, в отличие от некоторых европейских стран, это род войск вооружённых сил, то есть находится в юрисдикции министерства обороны (что-то типа Росгвардии). Отвечает за охрану общественного порядка в областях, не относящихся к юрисдикции сил полиции (в сельской местности), обеспечение внутренней безопасности и контроль над границей, а также выполняет некоторые особые обязанности, предписанные в определённых законах и правилах (например митинги). Работают как усиление полиции.
`

// Экспорт констант
module.exports.commands = commands
module.exports.text1 = text1
module.exports.text2 = text2
module.exports.text3 = text3

module.exports.text4 = text4
module.exports.text5 = text5
module.exports.text6 = text6
module.exports.text7 = text7
module.exports.text8 = text8
module.exports.text9 = text9

module.exports.text10 = text10
module.exports.text11 = text11

module.exports.text12 = text12
module.exports.text13 = text13
module.exports.text14 = text14
module.exports.text15 = text15
module.exports.text16 = text16
//module.exports.text17 = text17
module.exports.text18 = text18
module.exports.text19 = text19


module.exports.text200 = text200
module.exports.text20 = text20
module.exports.text21 = text21
module.exports.text22 = text22
module.exports.text23 = text23
module.exports.text24 = text24
module.exports.text25 = text25
module.exports.text26 = text26
module.exports.text27 = text27
module.exports.text28 = text28
module.exports.text29 = text29


module.exports.text30 = text30
module.exports.text31 = text31
module.exports.text32 = text32
module.exports.text33 = text33
module.exports.text34 = text34
module.exports.text35 = text35
module.exports.text36 = text36
module.exports.text37 = text37
module.exports.text38 = text38
module.exports.text39 = text39

module.exports.text40 = text40
module.exports.text41 = text41
module.exports.text42 = text42
module.exports.text43 = text43
module.exports.text44 = text44

module.exports.text50 = text50
module.exports.text51 = text51