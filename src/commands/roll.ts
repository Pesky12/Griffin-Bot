import { Message } from 'discord.js'

exports.run = async (message: Message, args: Array<string>) => {
  let min = parseFloat(args[0])
  let max = parseFloat(args[1])
  message.channel.send('🎲 Rolling the dice!').then((msg: any) => msg.edit(`🎲 You rolled ${Math.random() * (max - min) + min}`))
}

exports.settings = {
  enabled: true,
  pm: false,
  name: 'rps',
  shortDesc: '',
  longDesc: '',
  usage: '',
  perms: ['SEND_MESSAGES']
}
