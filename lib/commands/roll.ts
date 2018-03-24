import { Client, Message } from 'discord.js'
import randomgen from 'random-natural'

exports.run = async (client: Client, message: Message, args: Array<string>) => {
  let gen = randomgen({ min: args[0] || 0, max: args[1] || 20 })
  message.channel.send('🎲 Rolling the dice!').then(msg => msg.edit(`🎲 You rolled ${gen}`))
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
