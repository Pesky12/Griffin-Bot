import { profilePicEmbed } from '../Utils/embeds'
import { Client, Message } from 'discord.js'

module.exports.run = (client: Client, message: Message, args: Array<string>) => {
  let user = message.mentions.users.first() || client.users.get(args[0]) || message.author
  message.channel.send({ embed: profilePicEmbed(user) })
}

exports.GlobalSettings = {
  enabled: true,
  pm: false,
  name: 'profilepic',
  shortDesc: '',
  longDesc: '',
  usage: ''
}

exports.GuildDefaultSettings = {
  enabled: true,
  perms: []
}
