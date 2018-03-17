import { Message, User } from 'discord.js'

import { ban, botCant } from '../Utils/randomSelector'

exports.run = async (message: Message, args: Array<string>) => {
  let usersToBan = message.mentions.users
  let reason = args.slice(usersToBan.array().length).join(' ') || 'There is none! ¯\\_(ツ)_/¯'
  let messageArray: Array<string> = []
  if (usersToBan.size < 1) return message.channel.send('Can you mention them ?')
  usersToBan.map((u: User) => {
    if (!message.guild.members.find('id', u.id).bannable) return messageArray.push(botCant(message.author, 'ban'))
    messageArray.push(ban(message.author, u))
    message.guild.ban(u, reason)
  })
  message.channel.send(messageArray)
}

exports.settings = {
  enabled: true,
  public: true,
  PM: false,
  owneronly: false,
  permissionsRequired: ['BAN_MEMBERS']
}

exports.help = {
  name: 'ban',
  description: '🔨 Unleash the hammer!!',
  longDescription: '',
  usage: 'ban [mention/userID] [reason]'
}
