import { Message } from 'discord.js'

exports.run = (message: Message) => {
  return message.channel.send('**H E L L O  I  A M  A  B I R D**')
}

exports.GlobalSettings = {
  enabled: false,
  pm: false,
  name: 'hello',
  shortDesc: '',
  longDesc: '',
  usage: ''
}

exports.GuildDefaultSettings = {
  enabled: true,
  perms: []
}
