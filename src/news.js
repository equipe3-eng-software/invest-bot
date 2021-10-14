'use strict'
const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController

class NewsController extends TelegramBaseController {
    newsHandler($) {
        let message = 'Notícias mais relevantes do dia:'
        let message2 = 'Nas calls de Wall Street, só se fala em cadeia de suprimentos https://tinyurl.com/yy7add8u'
        let message3 = 'Reorganização do Iguatemi abre janela para M&A: Pátio Higienópolis no alvo https://tinyurl.com/4hscwy2y'
        $.sendMessage(message)
        $.sendMessage(message2)
        $.sendMessage(message3)
    }

    get routes() {
        return {
            'newsCommand': 'newsHandler'
        }
    }
}

module.exports = NewsController