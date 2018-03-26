import { userInfoEmbed } from '../Utils/embeds'
import { Message, Client } from 'discord.js'

module.exports.run = async (client: Client, message: Message, args: Array<string>) => {
  let user = message.mentions.users.first() || client.users.get(args[0]) || message.author
  message.channel.send({ embed: userInfoEmbed(user) })
}

exports.GlobalSettings = {
  enabled: true,
  pm: false,
  name: 'profile',
  shortDesc: '',
  longDesc: '',
  usage: ''
}

exports.GuildDefaultSettings = {
  enabled: true,
  perms: []
}
