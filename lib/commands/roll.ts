import { Client, Message } from 'discord.js'
import randomgen from 'random-natural'

exports.run = async (message: Message, args: Array<string>) => {
  let gen = randomgen({ min: args[0] || 0, max: args[1] || 20 })
  message.channel.send('🎲 Rolling the dice!').then(msg => msg.edit(`🎲 You rolled ${gen}`))
}

exports.GlobalSettings = {
  enabled: true,
  pm: false,
  name: 'rps',
  shortDesc: '',
  longDesc: '',
  usage: ''
}

exports.GuildDefaultSettings = {
  enabled: true,
  perms: []
}
