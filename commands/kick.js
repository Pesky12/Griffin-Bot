const randomMessages = require('../Utils/randomSelector')
const embeds = require('../Utils/embeds')

exports.run = async (client, message, args) => {
  let usersToBan = message.mentions.users
  if (usersToBan.size < 1) return message.channel.send('Can you mention them ?')
  let reason = args.slice(usersToBan.array().length).join(' ') || 'There is none! ¯\\_(ツ)_/¯'

  usersToBan.map(u => {
    if (!message.guild.members.find('id', u.id).bannable) return message.channel.send(randomMessages.botCant(u, 'ban'))
    let em = embeds.modActionEmbed('Ban', message.author, u, reason)
    if (message.guild.channels.find('name', 'mod-log')) message.guild.channels.find('name', 'mod-log').send({embed: em})
    message.channel.send(randomMessages.ban(message.author, u))
    message.guild.ban(u, reason)
  })
}

exports.settings = {
  enabled: true,
  public: true,
  PM: false,
  owneronly: false,
  permissionsRequired: ['KICK_MEMBERS']
}

exports.help = {
  name: 'kick',
  description: '👞 Kicks the mentioned user.',
  longDescription: '',
  usage: 'kick [mention/userID] [reason]'
}
