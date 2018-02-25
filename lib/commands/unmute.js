const umuteEmbed = require('../Utils/randomSelector').umute

exports.run = async(client, message, args) => {
  let usersToMute = message.mentions.users
  if (usersToMute.size < 1) return message.channel.send('Can you mention them?')
  let messageArray = []
  usersToMute.map(userToMute => {
    message.channel.overwritePermissions(userToMute, {
      SEND_MESSAGES: true,
      ADD_REACTIONS: true
    })
    messageArray.push(umuteEmbed(userToMute))
  })
  message.channel.send(messageArray)
}

exports.settings = {
  enabled: true,
  public: true,
  PM: false,
  owneronly: false,
  permissionsRequired: ['MANAGE_MESSAGES']
}

exports.help = {
  name: 'unmute',
  description: '🐵 Unmutes a mentioned user in the given channel.',
  longDescription: '',
  usage: 'warn [mention] [reason]'
}
