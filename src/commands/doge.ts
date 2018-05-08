import { Message } from 'discord.js'
import { currencyEmbed } from '../Utils/embeds'
import { resolve } from 'dns'
import got from 'got'

exports.run = (_message: Message, _args: Array<string>) => {
  let crypto = _args[0] || 'DOGE'
  let convertTo = _args[1] || 'USD'
  _message.channel.send({ embed: currencyEmbed(getCrypto(crypto, convertTo)) })
}

exports.settings = {
  enabled: true,
  pm: false,
  name: 'crypto',
  shortDesc: '',
  longDesc: '',
  usage: '',
  perms: ['SEND_MESSAGES']
}
export function getCrypto (crypto: string, convertTo: string) {
  return new Promise((resolve ,reject) => {
    got(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto.toUpperCase()}&tsyms=${convertTo.toUpperCase()}`).then((response: any) => {
      response = JSON.parse(response.body)
      response = response['DISPLAY'][crypto || convertTo][convertTo || crypto]
      resolve(response)
    }).catch(reject)
  })
}
