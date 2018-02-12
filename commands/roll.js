const randomgen = require('random-natural')

exports.run = async(client, message, args) => {
  let messageSent = message.channel.send('🎲 Rolling the dice!')
  let gen = randomgen({ min: args[0], max: args[1] })
  messageSent.edit(`🎲 You rolled ${gen}`)
}

exports.settings = {
  enabled: true,
  public: true,
  PM: true,
  owneronly: false,
  permissionsRequired: []
}

exports.help = {
  name: 'roll',
  description: '🎲 Throws dice with the numbers specified.',
  longDescription: '',
  usage: 'roll [min] [max]'
}
