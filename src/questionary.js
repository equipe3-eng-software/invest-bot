'use strict'
const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController

class QuestionaryController extends TelegramBaseController {
    questionaryHandler($) {
        $.sendMessage('Ops, algo deu errado')
}

    get routes() {
        return {
            'questionaryCommand': 'questionaryHandler',
        }
    }
}

module.exports = QuestionaryController