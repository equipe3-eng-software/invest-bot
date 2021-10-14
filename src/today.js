'use strict'
const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController

class TodayController extends TelegramBaseController {
    todayHandler($) {
        
        let message = 'Investimentos do dia para vc:'
        let message2 = 'XP - Fundo XPTO, rentabilidade 200% a.a, resgate 2 anos'
        let message3 = 'HedgeFunds - Fundo ABC, rentabilidade 1200% a.a, resgate 22 anos'
        $.sendMessage(message)
        $.sendMessage(message2)
        $.sendMessage(message3)
    }

    get routes() {
        return {
            'todayCommand': 'todayHandler'
        }
    }
}

module.exports = TodayController