'use strict'
const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController

class StartController extends TelegramBaseController {
    startHandler($) {
        $.sendMessage('Olá @, eu sou o InvestBot, te ajudo a investir melhor, o que vc quer fazer?')
        $.sendMessage('Para definir seu perfil de investidor, digite /profile') //add lista de comandos aqui
    }

    get routes() {
        return {
            'startCommand': 'startHandler'
        }
    }
}

module.exports = StartController