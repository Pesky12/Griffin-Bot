const embeds = require('../utils/embeds')
const randomMessages = require('../utils/randomSelector')

exports.run = async (client, message, args) => {
  let usersToBan = message.mentions.users
  if (usersToBan.size < 1) return message.channel.send('Can you mention them ?')
  let reason = args.slice(usersToBan.array().length).join(' ') || 'There is none! ¯\\_(ツ)_/¯'

  usersToBan.map(u => {
    if (!message.guild.members.find('id', u.id).bannable) return message.channel.send(randomMessages.botCant(u, 'ban'))
    message.channel.send(randomMessages.ban(message.author, u))
    message.guild.ban(u, reason)
  })
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
