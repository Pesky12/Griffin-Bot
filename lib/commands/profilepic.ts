import { profilePicEmbed } from '../Utils/embeds'
import { Client, Message } from 'discord.js';

module.exports.run = (client: Client, message: Message, args: Array<string>) => {
  let user = message.mentions.users.first() || client.users.get(args[0]) || message.author
  message.channel.send({ embed: profilePicEmbed(user) })
}

exports.settings = {
  enabled: true,
  public: true,
  PM: true,
  owneronly: false,
  permissionsRequired: []
}

exports.help = {
  name: 'profilepic',
  description: '🖨 Steals a profile pic.',
  longDescription: '',
  usage: 'profilepic [mention]'
}
