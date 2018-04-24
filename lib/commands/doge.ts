import { Message } from 'discord.js'
import { currencyEmbed } from '../Utils/embeds'

const got = require('got')

exports.run = (_message: Message, _args: Array<string>) => {
  _args = _args.join(' ').split(' to ')
  console.log(_args)
  let crypto = _args[0] || 'DOGE'
  let convertTo = _args[1] || 'USD'
  got(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto.toUpperCase()}&tsyms=${convertTo.toUpperCase()}`).then((response: any) => {
    response = JSON.parse(response.body)
    response = response['DISPLAY'][crypto || convertTo][convertTo || crypto]
    console.log(response)
    _message.channel.send({ embed: currencyEmbed(response) })
  }).catch(console.log)
}

exports.settings = {
  enabled: true,
  pm: false,
  name: 'crypto',
  shortDesc: '',
  longDesc: '',
  usage: '',
  perms: null
}
