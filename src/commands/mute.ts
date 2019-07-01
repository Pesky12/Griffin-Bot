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
    messageArray.push(`${usersToMute}`)
  })
  message.channel.send(messageArray)
}

exports.settings = {
  enabled: true,
  pm: false,
  name: 'mute',
  shortDesc: '',
  longDesc: '',
  usage: '',
  perms: ['SEND_MESSAGES', 'MANAGE_MESSAGES']
}
