'use strict'
const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController

class OtherwiseController extends TelegramBaseController {
    handle($) {
        $.sendMessage('Desculpe, eu não entendi :(')
    }
}

module.exports = OtherwiseController