import { Message, User } from 'discord.js'

import { ban, botCant } from '../Utils/randomSelector'

exports.run = async (_message: Message, _args: Array<string>) => {
  let usersToBan = _message.mentions.users
  let reason = _args.slice(usersToBan.array().length).join(' ') || 'There is none! ¯\\_(ツ)_/¯'
  let messageArray: Array<string> = []
  if (usersToBan.size < 1) return _message.channel.send('Can you mention them ?')
  usersToBan.map((u: User) => {
    if (!_message.guild.members.find('id', u.id).bannable) return messageArray.push(botCant(_message.author, 'ban'))
    messageArray.push(ban(_message.author, u))
    _message.guild.ban(u, reason)
  })
  _message.channel.send(messageArray)
}

exports.settings = {
  enabled: true,
  pm: false,
  name: 'ban',
  shortDesc: '',
  longDesc: '',
  usage: '',
  perms: ['BAN_MEMBERS']
}
