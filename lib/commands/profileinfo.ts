import { userInfoEmbed } from '../Utils/embeds'
import { Message, Client } from 'discord.js';

module.exports.run = async(client: Client, message: Message, args: Array<string>) => {
  let user = message.mentions.users.first() || client.users.get(args[0]) || message.author
  message.channel.send({ embed: userInfoEmbed(user) })
}

exports.settings = {
  enabled: true,
  public: true,
  PM: true,
  owneronly: false,
  permissionsRequired: []
}

exports.help = {
  name: 'profile',
  description: '🎫 Shows information about mentioned user.',
  longDescription: '',
  usage: 'profile {mention/userID}'
}
