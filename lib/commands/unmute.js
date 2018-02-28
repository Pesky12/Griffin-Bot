import { unmute } from '../Utils/randomSelector'

exports.run = async(client, message, args) => {
  let users = message.mentions.users
  if (users.size < 1) return message.channel.send('Can you mention them?')
  let messageArray = []
  users.map(userToMute => {
    message.channel.overwritePermissions(userToMute, {
      SEND_MESSAGES: true,
      ADD_REACTIONS: true
    })
    messageArray.push(unmute(userToMute))
  })
  message.channel.send(messageArray)
  return 1
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
