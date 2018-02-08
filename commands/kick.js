const randomMessages = require('../Utils/randomSelector')
const embeds = require('../Utils/embeds')

exports.run = async (client, message, args) => {
  let usersToBan = message.mentions.users
  let reason = args.slice(usersToBan.array().length).join(' ') || 'There is none! ¯\\_(ツ)_/¯'
  let messageArray = []
  if (usersToBan.size < 1) return message.channel.send('Can you mention them ?')
  usersToBan.map(u => {
    if (!message.guild.members.find('id', u.id).kickable) return messageArray.push(randomMessages.botCant(message.author, 'kick'))
    if (message.guild.channels.exists('name', 'mod-log')) message.guild.channels.find('name', 'mod-log').send({ embed: embeds.modActionEmbed('Kick', message.author, u, reason) })
    messageArray.push(randomMessages.kick(message.author, u))
    message.guild.fetchMember(u).then(u => { u.kick(u, reason) })
  })
  message.channel.send(messageArray)
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
