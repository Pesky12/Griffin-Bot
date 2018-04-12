import { Message, MessageMentions } from 'discord.js'
import { botCant } from '../Utils/randomSelector'
import { modActionEmbed } from '../Utils/embeds'

exports.run = (message: Message, args: Array<string>) => {
  let usersToBan: MessageMentions = message.mentions
  let reason = args.slice(usersToBan.users.array().length).join(' ') || 'There is none! ¯\\_(ツ)_/¯'
  let messageArray: Array<string> = []
  if (usersToBan.users.size < 1) return message.channel.send('Can you mention them ?')
  usersToBan.users.map(u => {
    if (!message.guild.members.find('id', u.id).kickable) return messageArray.push(botCant(message.author, 'kick'))
    if (message.guild.channels.exists('name', 'mod-log')) message.guild.channels.find('name', 'mod-log').send({ embed: modActionEmbed('Kick', message.author, u, reason) })
    messageArray.push(u.toString())
    message.guild.fetchMember(u).then(u => { u.kick(reason) })
  })
  message.channel.send(messageArray)
}

exports.GlobalSettings = {
  enabled: true,
  pm: false,
  name: 'kick',
  shortDesc: '',
  longDesc: '',
  usage: ['KICK_MEMBERS']
}
