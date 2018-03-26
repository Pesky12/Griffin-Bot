import { Message } from 'discord.js'
exports.run = async (_message: Message, _args: Array<string>) => {
  return
}

exports.GlobalSettings = {
  enabled: false,
  pm: false,
  name: 'kaplan',
  shortDesc: '',
  longDesc: '',
  usage: ''
}

exports.GuildDefaultSettings = {
  enabled: true,
  perms: []
}
