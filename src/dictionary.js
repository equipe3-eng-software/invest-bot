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
            'Perfil de Investidor': {
                message: `O perfil de investidor é o resultado de uma análise das suas características em relação a investimentos, e principalmente ao risco envolvido.

Simples de ser obtido através de algumas questões, o perfil de investidor serve para indicar a carteira de investimentos mais adequada para você.`
                
            },
            'Renda Fixa': {
                message: `
                A renda fixa é uma modalidade de investimento muito recomendada para investidores iniciantes ou que possuem perfis mais conservadores. Isso acontece porque ela combina segurança e bons rendimentos.

Dentro do universo da renda fixa, existem títulos privados e públicos. Cada um deles possui benefícios e características próprias. 

Dentre eles podemos citar:
                
                `,
                oneTimeKeyboard: true,
                'Tesouro Direto': () => {
                    oneTimeKeyboard: true,

                    $.sendMessage(`Tesouro Direto é um programa da Secretaria do Tesouro Nacional do Brasil implementado em 7 de janeiro de 2002 em parceria com a B3 e que possui o intuito de democratizar a compra e venda de títulos públicos federais por pessoas físicas através da internet.`)
                },
                'CDB (Certificado de Depósito Bancário)': () => {
                    oneTimeKeyboard: true,

                    $.sendMessage(`Os CDBs são emitidos por bancos e o principal objetivo ao fazer isso é financiar suas atividades. Ou seja, o investidor pode disponibilizar dinheiro para que as instituições financeiras realizem empréstimos, financiamentos e outros procedimentos que geram lucro.`)
                },
                'LCIs / LCAs': () => {
                    oneTimeKeyboard: true,
                    $.sendMessage(`A LCI (Letra de Crédito Imobiliário) e a LCA (Letra de Crédito do Agronegócio) são dois tipos de investimento em renda fixa isentos de Imposto de Renda, que costumam garantir retornos bem superiores ao da caderneta de poupança.

Ambas são muito parecidas com os CDBs emitidos pelos bancos, ou seja, quem compra esses papéis “empresta” dinheiro para uma instituição financeira.`)
                }
                
            },
            'Renda Variável': {
                message: `A renda variável possui esse nome justamente porque quando você investe em algo é mais difícil prever qual será a sua rentabilidade no futuro.

Os ativos da renda variável podem possibilitar uma rentabilidade muito superior a de outros investimentos. É importante entender que quanto maior for o risco da sua operação, maiores são as chances de você ter um ótimo retorno sobre o investimento. 

A bolsa de valores e alguns fundos de investimento são algumas das opções para quem tem maior tolerância a riscos.
                
                `
                
            },
            'Ativos e passivos': {
                message: ` Um ativo é um bem que uma organização ou pessoa tem. Assim, tudo o que pode ter algum valor atribuído a ele é um ativo.
Já um passivo, é tudo aquilo que representa um gasto para você.
Exemplos:
                
                `,
                oneTimeKeyboard: true,
                'Ativos': () => {
                    oneTimeKeyboard: true,

                    $.sendMessage(`Ativos permanentes: bônus e ações
Ativos fixos: prédios, terrenos e direitos autorais, entre outros
Ativo diferido: aplicações em pesquisas e projetos, por exemplo`)
                },
                'Passivos': () => {
                    oneTimeKeyboard: true,

                    $.sendMessage(`Passivo circulante: contas e impostos a pagar
Passivos a longo prazo: hipotecas e letras de câmbio
Resultados de Exercícios futuros: dinheiro que possa ser recebido adiantado`)
                },
                
            },
            'Liquidez': {
                message: `A liquidez é a facilidade que uma aplicação tem de ser convertida em dinheiro para você sem que haja perda de valor.
Quanto mais rápido esse processo for, mais alta é a liquidez daquele ativo. Um exemplo de título de alta liquidez é o Tesouro Selic. Ele permite que você resgate o valor aplicado em um dia útil, sem que haja rentabilidade negativa.
Existem 2 tipos de liquidez: a diária e a no vencimento.`
                
            },
            'CDI': {
                message: `Esse termo significa Certificado de Depósito Interbancário. 
Ele é um dos principais indexadores dos ativos existentes no mercado financeiro.
                
                `
                
            },
            'Taxa SELIC': {
                message: `A Taxa Selic é a abreviação de Sistema Especial de Liquidação e Custódia. 
Ela é a taxa básica de juros do Brasil e a sua meta é definida pelo Copom (Comitê de Política Monetária do Banco Central) a cada 45 dias.
Ela tem influência direta na inflação e no crédito, pois rege os juros do mercado interbancário.
                `
                
            },
            'Day Trade': {
                message: `Day Trade é um termo do mercado financeiro. 
É uma operação de curtíssimo prazo com compra e venda do ativo no mesmo pregão ou de venda e compra.
Seu objetivo é ganhar dinheiro na variação do preço de forma rápida baseado nas oscilações de determinado ativo.`
                
            },
            'IPCA': {
                message: `O IPCA é o Índice Nacional de Preços ao Consumidor Amplo (IPCA) e é a partir dele que a inflação do país é medida.
                
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