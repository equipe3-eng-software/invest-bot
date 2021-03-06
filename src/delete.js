'use strict'
const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController

class DeleteController extends TelegramBaseController {
    deleteHandler($) {
            $.runMenu({
                message: 'Proceder para deletar seus dados? Essa operação não pode ser desfeita:',
                layout: 2,
                oneTimeKeyboard: true,
                resizeKeyboard: true,
                'SIM': () => {
                    oneTimeKeyboard: true,
                    $.sendMessage(`Conta deletada!`)
                },
                'NÃO': () => {
                    oneTimeKeyboard: true,
                    $.sendMessage(`Bom te ter aqui!`)
                },
            'anyMatch': () => {
                oneTimeKeyboard: true,
                $.sendMessage('Message')
            }
        })
    }

    get routes() {
        return {
            'deleteCommand': 'deleteHandler'
        }
    }
}

module.exports = DeleteController