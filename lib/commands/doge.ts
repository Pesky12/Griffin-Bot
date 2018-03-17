import { Client, Message } from 'discord.js';
import { currencyEmbed } from '../Utils/embeds'

const got = require('got')

exports.run = (message: Message, args: Array<string>) => {
  args = args.join(' ').split(' to ')
  console.log(args)
  let crypto = args[0] || 'DOGE'
  let convertTo = args[1] || 'USD'
  got(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto.toUpperCase()}&tsyms=${convertTo.toUpperCase()}`).then((response: any) => {
    response = JSON.parse(response.body)
    response = response['DISPLAY'][crypto || convertTo][convertTo || crypto]
    console.log(response)
    message.channel.send({ embed: currencyEmbed(response) })
  }).catch(console.log)
}

exports.settings = {
  enabled: true,
  public: true,
  PM: true,
  owneronly: false,
  permissionsRequired: []
}

exports.help = {
  name: 'crypto',
  description: '',
  longDescription: '',
  usage: ''
}
