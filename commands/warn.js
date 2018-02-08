const embeds = require('../Utils/embeds')
const random = require('../Utils/randomSelector')
exports.run = (client, message, args) => {
  let warnedUsers = message.mentions.users
  let reason = args.slice(warnedUsers.array().length).join(' ') || 'There is none! ¯\\_(ツ)_/¯'
  let messageArray = []
  warnedUsers.map(u => {
    let warnEmbed = embeds.modActionEmbed('Warn', message.author, u, reason)
    if (message.guild.channels.exists('name', 'mod-log')) message.guild.channels.find('name', 'mod-log').send({embed: warnEmbed})
    u.send({ embed: warnEmbed })
    messageArray.push(random.warn(u))
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
  name: 'warn',
  description: '🛑 Issues a warning to the mentioned user.',
  longDescription: '',
  usage: 'warn [mention] [reason]'
}
