import { profilePicEmbed } from '../Utils/embeds'

module.exports.run = (client, message, args) => {
  let user = message.mentions.users.first() || client.users.get(args[0]) || message.autho
  message.channel.send({embed: profilePicEmbed(user)})
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
