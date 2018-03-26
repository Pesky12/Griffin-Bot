import { Message } from 'discord.js'

exports.run = (_message: Message, _args: Array<string>) => {
  return
}

exports.GlobalSettings = {
  enabled: false,
  pm: false,
  name: '',
  shortDesc: '',
  longDesc: '',
  usage: ''
}

exports.GuildDefaultSettings = {
  enabled: true,
  perms: []
}
