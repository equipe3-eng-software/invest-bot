'use strict'
const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand
const chatbot = new Telegram.Telegram('2078358895:AAHkxB5Gcp9sVsHzWl3KwdhZ79uiF42rma4') //investBot

const StartController = require('./start'),
    OtherwiseController = require('./otherwise'),
    ProfileController = require('./profile'),
    TodayController = require('./today'),
    NewsController = require('./news')
    
chatbot.router.when(new Telegram.TextCommand('/start', 'startCommand'), new StartController())
    .when(new Telegram.TextCommand('/setProfile', 'profileCommand'),new ProfileController())
    .when(new Telegram.TextCommand('/today', 'todayCommand'), new TodayController())
    .when(new Telegram.TextCommand('/news', 'newsCommand'), new NewsController())

.otherwise(new OtherwiseController());

