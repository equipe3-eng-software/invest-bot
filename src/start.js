'use strict'
const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController

class StartController extends TelegramBaseController {
    startHandler($) {
        let message = `Olá @, eu sou o InvestBot, te ajudo a investir melhor, o que vc quer fazer?
Para definir seu perfil de investidor, digite /setProfile\n
Para receber as melhore recomendacoes de hj, digite /today\n
Para ajuda, digite /help\n
Para conhecer os principais termos, digite /dictionary\n
Para acessar os termos de uso, digite /terms\n

Em breve: Open Banking, cotações diárias e mais!
        `
        $.sendMessage(message)
    }

    get routes() {
        return {
            'startCommand': 'startHandler'
        }
    }
}

module.exports = StartController