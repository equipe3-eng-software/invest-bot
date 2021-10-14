'use strict'
const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController

class ProfileController extends TelegramBaseController {
    profileHandler($) {
        let profile = $.message.text
        // let profile = $.message.text.split(' ').slice(1).join(' ')
        // if (!profile) return $.sendMessage('Sorry, ...')

        // $.getUserSession('investProfile').then(investProfile => {
        //     if (!Array.isArray(investProfile)) return $.setUserSession('investProfile', profile)
        //     else $.setUserSession('investProfile', profile)
        // })
        // let message = `Seu perfil foi definido como: ${profile}`
        // $.sendMessage(message)
        $.runMenu({
            message: 'Selecione perfil:',
            oneTimeKeyboard: true,
            'Escolher': {
                message: 'Hoje trabalhamos apenas com os perfis Moderado e conservador, ok?',
                oneTimeKeyboard: true,
                'Moderado': () => {
                    oneTimeKeyboard: true,
                    $.getUserSession('investProfile').then(investProfile => {
                        if (!Array.isArray(investProfile)) return $.setUserSession('investProfile',  'Moderado')
                        else $.setUserSession('investProfile', 'Moderado')
                     })
                    $.sendMessage(`Seu perfil foi definido como: Moderado`)
                },
                'Conservador': () => {
                    oneTimeKeyboard: true,
                    $.getUserSession('investProfile').then(investProfile => {
                        if (!Array.isArray(investProfile)) return $.setUserSession('investProfile',  'Conservador')
                        else $.setUserSession('investProfile', 'Conservador')
                     })
                    $.sendMessage(`Seu perfil foi definido como: Conservador`)
                },
                'Só estou dando uma olhada': () => {
                    oneTimeKeyboard: true,
                    $.sendMessage('Okay, vc pode escolher mais tarde!')
                    $.sendMessage('Iremos te mandar sugestões de ambos os perfis para que vc conheça melhor!')
                }
                
            },
            'anyMatch': () => { //will be executed at any other message
                $.sendMessage('Message')
            }
        })
    }

    get routes() {
        return {
            'profileCommand': 'profileHandler'
        }
    }
}

module.exports = ProfileController