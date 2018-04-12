import { mute } from '../Utils/randomSelector'
import { GuildChannel, Message } from 'discord.js'

module.exports.run = async (message: Message) => {
  if (!(message.channel instanceof GuildChannel)) return
  const channel: GuildChannel = message.channel
  let usersToMute = message.mentions.users
  if (usersToMute.size < 1) return message.channel.send('Can you mention them?')
  let messageArray: Array<string> = []
  usersToMute.map(userToMute => {
    channel.overwritePermissions(userToMute, {
      SEND_MESSAGES: false,
      ADD_REACTIONS: false
    })
    messageArray.push(mute(userToMute))
  })
  message.channel.send(messageArray)
}

exports.GlobalSettings = {
  enabled: true,
  pm: false,
  name: 'mute',
  shortDesc: '',
  longDesc: '',
  usage: ['MANAGE_MESSAGES']
}
