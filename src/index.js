'use strict'
const Telegram = require('telegram-node-bot')

const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand
const chatbot = new Telegram.Telegram('') //investBot - removed due to changing repo visibility

const StartController = require('./start'),
    OtherwiseController = require('./otherwise'),
    ProfileController = require('./profile'),
    TodayController = require('./today'),
    NewsController = require('./news'),
    DictionaryController = require('./dictionary'),
    QuestionaryController = require('./questionary'),
    HelpController = require('./help'),
    DeleteController = require('./delete')
    
chatbot.router.when(new Telegram.TextCommand('/start', 'startCommand'), new StartController())
    .when(new Telegram.TextCommand('/setProfile', 'profileCommand'),new ProfileController())
    // .when(new Telegram.TextCommand('/profile', 'viewProfileCommand'),new ProfileController())
    .when(new Telegram.TextCommand('/today', 'todayCommand'), new TodayController())
    .when(new Telegram.TextCommand('/news', 'newsCommand'), new NewsController())
    .when(new Telegram.TextCommand('/dictionary', 'dictionaryCommand'), new DictionaryController())
    // .when(new Telegram.TextCommand('/questionary', 'questionaryCommand'), new QuestionaryController())
    .when(new Telegram.TextCommand('/help', 'helpCommand'), new HelpController())
    .when(new Telegram.TextCommand('/terms', 'termsCommand'), new HelpController())
    .when(new Telegram.TextCommand('/delete', 'deleteCommand'), new DeleteController())
    .otherwise(new OtherwiseController());
