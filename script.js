// Импорт Telegraf и Markup
const {
    Telegraf,
    Markup
  } = require('telegraf')
  // Импорт dotenv для защиты API токена
  require('dotenv').config()
  // Импорт нашего модуля с константами
  const my_const = require('./const')
  // Инициализация бота с помощью Telegraf
  const bot = new Telegraf(process.env.BOT_TOKEN)
  
  // Обработка команды /start
  bot.start((ctx) => ctx.reply(`Merhaba, ${ctx.message.from.first_name ? ctx.message.from.first_name : 'незнакомец'}! Жми меню - кнопка находится внизу слева`))
  // Обработка команды /help
  bot.help((ctx) => ctx.reply(my_const.commands))
  // Обработка команды /course

  bot.command('transport', async (ctx) => {
    try {
      await ctx.replyWithHTML('<b>Транспорт и такси</b>', Markup.inlineKeyboard(
        [
          [Markup.button.callback('Такси', 'btn_4')],
           [Markup.button.callback('Трансфер', 'btn_5')],
          [Markup.button.callback('Автобус в аэропорт Даламан', 'btn_6')],
           [Markup.button.callback('Городской автобус', 'btn_7')], 
           [Markup.button.callback('Междугородний автобус', 'btn_8')], 
           [Markup.button.callback('Аренда авто', 'btn_9')],
          [Markup.button.callback('Аренда скутера', 'btn_10')],
          [Markup.button.callback('Аренда электросамоката', 'btn_11')],
          
        
        ]
      ))
    } catch (e) {
      console.error(e)
    }
  })

  bot.command('food', async (ctx) => {
    try {
      await ctx.replyWithHTML('<b>Кафе и рестораны</b>', Markup.inlineKeyboard(
        [
          [Markup.button.callback('Выпить кофе и выбрать десерт', 'btn_12')],
           [Markup.button.callback('Съесть мясо', 'btn_13')],
          [Markup.button.callback('Выбрать пиццу', 'btn_14')],
           [Markup.button.callback('Пойти на завтрак', 'btn_15')], 
           [Markup.button.callback('Поужинать с видом на марину', 'btn_16')], 
           //[Markup.button.callback('Когда хочется сладенького', 'btn_17')],
          [Markup.button.callback('Свежевыжатый сок', 'btn_18')],
          [Markup.button.callback('Сходить на рынок', 'btn_19')]
        
        ]
      ))
    } catch (e) {
      console.error(e)
    }
  })

  bot.command('out', async (ctx) => {
    try {
      await ctx.replyWithHTML('<b>Развлечения</b>', Markup.inlineKeyboard(
        [
          [Markup.button.callback('Яхтинг', 'btn_200')],
          [Markup.button.callback('Археологический музей', 'btn_20')],
           [Markup.button.callback('Киноафиша Erasta', 'btn_21')],
          [Markup.button.callback('Киноклуб Кин-дза-дза', 'btn_22')],
           [Markup.button.callback('Велосообщество', 'btn_23')], 
           [Markup.button.callback('Полет на параплане', 'btn_24')], 
           [Markup.button.callback('Волейбол', 'btn_25')],
          [Markup.button.callback('Ликийская тропа', 'btn_26')],
          [Markup.button.callback('Боди-балет и стретчинг', 'btn_27')],
          //[Markup.button.callback('Бильярд', 'btn_28')],
          [Markup.button.callback('Футбольный стадион', 'btn_29')],
          
          
        ]
      ))
    } catch (e) {
      console.error(e)
    }
  })

  bot.command('services', async (ctx) => {
    try {
      await ctx.replyWithHTML('<b>Услуги</b>', Markup.inlineKeyboard(
        [
          
          [Markup.button.callback('Фотоателье', 'btn_31')],
           [Markup.button.callback('Цветы и букеты', 'btn_32')],
          [Markup.button.callback('График отключения электричества', 'btn_33')],
           [Markup.button.callback('Ремонт сумок и чемоданов', 'btn_34')], 
           [Markup.button.callback('Ремон ноутбуков и компьютеров', 'btn_35')], 
           [Markup.button.callback('Ремонт смартфонов', 'btn_36')],
          [Markup.button.callback('Хозяйственный магазин', 'btn_37')],
          [Markup.button.callback('Доставка воды и газа', 'btn_38')],
          [Markup.button.callback('Муниципальные курсы Турецкого языка', 'btn_30')],
          [Markup.button.callback('Курьеры в Турции', 'btn_39')],
          
          
        ]
      ))
    } catch (e) {
      console.error(e)
    }
  })


  bot.command('medicine', async (ctx) => {
    try {
      await ctx.replyWithHTML('<b>Медицина</b>', Markup.inlineKeyboard(
        [
          [Markup.button.callback('Аналоги названий привычных лекарств в Турции', 'btn_40')],
          [Markup.button.callback('Дежурные аптеки', 'btn_41')],
           [Markup.button.callback('Страховка', 'btn_42')],
          [Markup.button.callback('Отзывы по врачам', 'btn_43')],
           [Markup.button.callback('Чат по медицине в Турции', 'btn_44')], 
        
        ]
      ))
    } catch (e) {
      console.error(e)
    }
  })

  bot.command('weather', async (ctx) => {
    try {
      await ctx.replyWithHTML('<b>Прогноз погоды</b>', Markup.inlineKeyboard(
        [
          [Markup.button.callback('Фетхие', 'btn_1'), Markup.button.callback('Олюдениз', 'btn_2'), Markup.button.callback('Бабадаг', 'btn_3')]
        ]
      ))
    } catch (e) {
      console.error(e)
    }
  })

  bot.command('emergency', async (ctx) => {
    try {
      await ctx.replyWithHTML('<b>Телефоны экстренных служб</b>', Markup.inlineKeyboard(
        [
          [Markup.button.callback('Экстренные службы в Турции', 'btn_50')],
          [Markup.button.callback('Службы охраны правопорядка', 'btn_51')],
         
        ]
      ))
    } catch (e) {
      console.error(e)
    }
  })
  /**
   * Функция для отправки сообщения ботом
   * @param {String} id_btn Идентификатор кнопки для обработки
   * @param {String} src_img Путь к изображению, или false чтобы отправить только текст
   * @param {String} text Текстовое сообщение для отправки
   * @param {Boolean} preview Блокировать превью у ссылок или нет, true - блокировать, false - нет
   */
  function addActionBot(id_btn, src_img, text, preview) {
    bot.action(id_btn, async (ctx) => {
      try {
        await ctx.answerCbQuery()
        if (src_img !== false) {
          await ctx.replyWithPhoto({
            source: src_img
          })
        }
        await ctx.replyWithHTML(text, {
          disable_web_page_preview: preview
        })
      } catch (e) {
        console.error(e)
      }
    })
  }
  // Обработчик кнопок с помощью функции
  addActionBot('btn_1', false, my_const.text1, true)
  addActionBot('btn_2', false, my_const.text2, true)
  addActionBot('btn_3', false, my_const.text3, true)

  //addActionBot('btn_3', false, my_const.text3, false)

  addActionBot('btn_4', './img/taxi.jpg', my_const.text4, true)
  addActionBot('btn_5', './img/transfer.jpg', my_const.text5, true)
  addActionBot('btn_6', './img/bus.jpg', my_const.text6, true)
  addActionBot('btn_7', './img/fetbus.jpg', my_const.text7, true)
  addActionBot('btn_8', './img/obilet.jpg', my_const.text8, true)
  addActionBot('btn_9', './img/carrent.jpg', my_const.text9, true)

  addActionBot('btn_10', './img/vespa.jpg', my_const.text10, true)
  addActionBot('btn_11', './img/scooter.jpg', my_const.text11, true)

  addActionBot('btn_12', './img/coffee.jpg', my_const.text12, true)
  addActionBot('btn_13', './img/steak.jpg', my_const.text13, true)
  addActionBot('btn_14', './img/pizza.jpg', my_const.text14, true)
  addActionBot('btn_15', './img/breakfast.jpg', my_const.text15, true)
  addActionBot('btn_16', './img/unique.jpg', my_const.text16, true)
  addActionBot('btn_17', './img/mereng.jpg', my_const.text17, true)

  addActionBot('btn_18', './img/fresh.jpg', my_const.text18, true)
  addActionBot('btn_19', './img/market.jpg', my_const.text19, true)

  addActionBot('btn_200', './img/yachting.jpg', my_const.text200, true)
  addActionBot('btn_20', './img/vidmuseum.mp4', my_const.text20, true)
  addActionBot('btn_21', './img/cinema.jpg', my_const.text21, true)
  addActionBot('btn_22', './img/newmovie.jpg', my_const.text22, true)
  addActionBot('btn_23', './img/bike.jpg', my_const.text23, true)
  addActionBot('btn_24', './img/paraplan.jpg', my_const.text24, true)
  addActionBot('btn_25', './img/voleyball.jpg', my_const.text25, true)
  addActionBot('btn_26', './img/tropa.jpg', my_const.text26, true)
  addActionBot('btn_27', './img/fitness.jpg', my_const.text27, true)
  addActionBot('btn_28', './img/biliards.jpg', my_const.text28, true)
  addActionBot('btn_29', './img/stadium.jpg', my_const.text29, true)    

  addActionBot('btn_30', './img/courses.jpg', my_const.text30, true)
  addActionBot('btn_31', './img/photo.jpg', my_const.text31, true)
  addActionBot('btn_32', './img/flowers.jpg', my_const.text32, true)
  addActionBot('btn_33', './img/electricity.jpg', my_const.text33, true)
  addActionBot('btn_34', './img/sumki.jpg', my_const.text34, true)
  addActionBot('btn_35', './img/comp_repair.jpg', my_const.text35, true)
  addActionBot('btn_36', './img/phone_repair.jpg', my_const.text36, true)
  addActionBot('btn_37', './img/hozmag.jpg', my_const.text37, true)
  addActionBot('btn_38', './img/water.jpg', my_const.text38, true)
  addActionBot('btn_39', './img/courier.jpg', my_const.text39, true)

  addActionBot('btn_40', './img/lekarstva.jpg', my_const.text40, true)
  addActionBot('btn_41', './img/pharmacy.jpg', my_const.text41, true)
  addActionBot('btn_42', './img/insurance.jpg', my_const.text42, true)
  addActionBot('btn_43', './img/doctor.jpg', my_const.text43, true)
  addActionBot('btn_44', './img/chat.jpg', my_const.text44, true)

  addActionBot('btn_50', './img/ambulance.jpg', my_const.text50, true)
  addActionBot('btn_51', './img/zabita.jpg', my_const.text51, true)
    

  // Запустить бота
  bot.launch()
  
  // Включить плавную остановку
  process.once('SIGINT', () => bot.stop('SIGINT'))
  process.once('SIGTERM', () => bot.stop('SIGTERM'))