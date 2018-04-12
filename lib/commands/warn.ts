import { modActionEmbed } from '../Utils/embeds'
import { warn } from '../Utils/randomSelector'
import { Message } from 'discord.js'

exports.run = (message: Message, args: Array<string>) => {
  let warnedUsers = message.mentions.users
  let reason = args.slice(warnedUsers.array().length).join(' ') || 'There is none! ¯\\_(ツ)_/¯'
  let messageArray: Array<string> = []
  warnedUsers.map(u => {
    let warnEmbed = modActionEmbed('Warn', message.author, u, reason)
    if (message.guild.channels.exists('name', 'mod-log')) message.guild.channels.find('name', 'mod-log').send({ embed: warnEmbed })
    u.send({ embed: warnEmbed })
    messageArray.push(warn(u))
  })
  message.channel.send(messageArray)
}

exports.GlobalSettings = {
  enabled: true,
  pm: false,
  name: 'warn',
  shortDesc: '',
  longDesc: '',
  usage: ['MANAGE_MESSAGES']
}
