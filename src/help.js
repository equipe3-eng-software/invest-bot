'use strict'
const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController

class HelpController extends TelegramBaseController {
    helpHandler($) {
        $.runMenu({
            message: 'Clique em um artigo para saber mais:',
            layout:2,
            oneTimeKeyboard: true,
            'Perfil': () => {
                oneTimeKeyboard: true,
                $.sendMessage(`perfil de inverstidor é...Voc6e pode verificar em... Voc6e pode alterar`)
            },
            'Notícias': () => {
                oneTimeKeyboard: true,
                $.sendMessage(`Notícias relevantes para a economia e para seu bolso, selecionadas pelo nosso time de especialistas`)
            },
            'Recomendações': () => {
                oneTimeKeyboard: true,
                $.sendMessage('Investimentos selecionados para você pelo nosso time de especialistas!')
            },
            'Atendimento': () => {
                oneTimeKeyboard: true,
                $.sendMessage('Para falar com um atendente, mande um email para cx@invest.bot')
            },
            'Termos': () => {
                oneTimeKeyboard: true,
                $.sendMessage('Nossos termos de uso estão disponíveis aqui: invest.bot/terms')
            },
            'anyMatch': () => { 
                $.sendMessage('Desculpe, não entendi. Para ajuda /help')
            }
        })

    }

    termsHandler($){
        $.sendMessage('Nossos termos de uso estão disponíveis aqui: invest.bot/terms')
    }

    get routes() {
        return {
            'helpCommand': 'helpHandler',
            'termsCommand': 'termsHandler',
        }
    }
}

module.exports = HelpController