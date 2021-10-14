'use strict'
const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController

class DictionaryController extends TelegramBaseController {
    dictionaryHandler($) {
        
        $.runMenu({
            message: 'Clique no termos para saber mais:',
            oneTimeKeyboard: true,
            resizeKeyboard: true,
            layout:3,
            'Renda Fixa': {
                message: `
                Textao aqui 
                
                `,
                oneTimeKeyboard: true,
                'Tesouro Direto': () => {
                    oneTimeKeyboard: true,

                    $.sendMessage(`texto`)
                },
                'CDB (Certificado de Depósito Bancário)': () => {
                    oneTimeKeyboard: true,

                    $.sendMessage(`Texto`)
                },
                'LCIs / LCAs': () => {
                    oneTimeKeyboard: true,
                    $.sendMessage('Texto')
                }
                
            },
            'Renda Variável': {
                message: `
                Textao aqui 2
                
                `
                
            },
            'Ativos e passivos': {
                message: `
                Textao aqui 
                
                `,
                oneTimeKeyboard: true,
                'Ativos': () => {
                    oneTimeKeyboard: true,

                    $.sendMessage(`texto 1111`)
                },
                'Passivos': () => {
                    oneTimeKeyboard: true,

                    $.sendMessage(`Texto 22222`)
                },
                
            },
            'Rentabilidade': {
                message: `
                Textao aqui 2
                
                `
                
            },
            'CDI': {
                message: `
                Textao aqui 2
                
                `
                
            },
            'Taxa SELIC': {
                message: `
                Textao aqui 2
                
                `
                
            },
            'IPCA': {
                message: `
                Textao aqui 2
                
                `
                
            },
            'Liquidez': {
                message: `
                Textao aqui 2
                
                `
                
            },
            'anyMatch': () => { //will be executed at any other message
                $.sendMessage('Message')
            }
        })
    }

    get routes() {
        return {
            'dictionaryCommand': 'dictionaryHandler'
        }
    }
}

module.exports = DictionaryController