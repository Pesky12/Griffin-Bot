import { Client } from 'discord.js'

exports.run = (client: Client, message: Message, args: Array<string>) => {
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
