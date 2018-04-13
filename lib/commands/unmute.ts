import { unmute } from '../Utils/randomSelector'
import { GuildChannel, Message } from 'discord.js'

exports.run = async (message: Message) => {
  if (!(message.channel instanceof GuildChannel)) return
  const channel: GuildChannel = message.channel
  let users = message.mentions.users
  if (users.size < 1) return message.channel.send('Can you mention them?')
  let messageArray: Array<string> = []
  users.map(userToMute => {
    channel.overwritePermissions(userToMute, {
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
  pm: false,
  name: 'unmute',
  shortDesc: '',
  longDesc: '',
  usage: ['MANAGE_MESSAGES']
}
