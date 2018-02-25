const embed = require('../Utils/embeds').profilePicEmbed

module.exports.run = (client, message, args) => {
  let user = message.mentions.users.first() || client.users.get(args[0]) || message.autho
  message.channel.send({embed: embed(user)})
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
