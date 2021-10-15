'use strict'
const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController

class TodayController extends TelegramBaseController {
    todayHandler($) {
        
        let message = 'Investimentos do dia para vc:'
        let message2 = 'Multimermacdo Credito Privado, rentabilidade 7,4% a.a, resgate 10 dias'
        let message3 = 'Credito Privado Renda Fixa, rentabilidade 14,72% a.a, resgate 7 dias'
        let message4 = 'Inflação Americana Renda Fixa, rentabilidade 0,6% a.a, resgate 1 dias1'
        $.sendMessage(message)
        $.sendMessage(message2)
        $.sendMessage(message3)
        $.sendMessage(message4)
    }

    get routes() {
        return {
            'todayCommand': 'todayHandler'
        }
    }
}

module.exports = TodayController