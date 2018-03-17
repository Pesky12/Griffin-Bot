import { mute } from '../Utils/randomSelector'
import { Client, Message } from 'discord.js';

module.exports.run = async(message: Message) => {
  let usersToMute = message.mentions.users
  if (usersToMute.size < 1) return message.channel.send('Can you mention them?')
  let messageArray: Array<string> = []
  usersToMute.map(userToMute => {
    message.channel.overwritePermissions(userToMute, {
      SEND_MESSAGES: false,
      ADD_REACTIONS: false
    })
    messageArray.push(mute(userToMute))
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
