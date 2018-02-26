import { userInfoEmbed } from '../Utils/embeds'

module.exports.run = async(client, message, args) => {
  let user = message.mentions.users.first() || client.users.get(args[0]) || message.author
  message.channel.send({embed: userInfoEmbed(user)})
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
