const got = require('got')
const embeds = require('../Utils/embeds')

exports.run = (client, message, args, config) => {
  args = args.join(' ').split(' to ')
  let crypto = args[0].toUpperCase() || 'DOGE'
  let convertTo = args[1].toUpperCase() || 'USD'
  got(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${convertTo}`).then(response => {
    response = JSON.parse(response.body)
    response = response['DISPLAY'][crypto || convertTo][convertTo || crypto]
    console.log(response)
    message.channel.send({ embed: embeds.currencyEmbed(response) })
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
