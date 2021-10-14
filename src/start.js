'use strict'
const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController

class StartController extends TelegramBaseController {
    startHandler($) {

        $.runMenu({
            message: 'Olá, eu sou o InvestBot, te ajudo a investir melhor, vamos começar?',
            oneTimeKeyboard: true,

                'Definir Perfil': () => {
                    oneTimeKeyboard: true,
                    $.sendMessage(`Definir`)
                },
                'Ver recomendações': () => {
                    oneTimeKeyboard: true,
                    $.sendMessage(`Start`)
                },
                'Ajuda': () => {
                    oneTimeKeyboard: true,

                    $.sendMessage('Ajuda!')
                },
                
            'anyMatch': () => { 
                $.sendMessage('What?')
            }
        })
    }

    get routes() {
        return {
            'startCommand': 'startHandler'
        }
    }
}

module.exports = StartController