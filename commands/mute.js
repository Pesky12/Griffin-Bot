const muteMessage = require('../Utils/randomSelector').mute

module.exports.run = async(client, message, args) => {
  let usersToMute = message.mentions.users
  if (usersToMute.size < 1) return message.channel.send('Can you mention them?')
  let messageArray = []
  usersToMute.map(userToMute => {
    message.channel.overwritePermissions(userToMute, {
      SEND_MESSAGES: false,
      ADD_REACTIONS: false
    })
    messageArray.push(muteMessage(userToMute))
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
  name: 'mute',
  description: '🙊 Mutes a mentioned user in the given channel.',
  longDescription: '',
  usage: 'mute [mention or ID]'
}
