const embeds = require('../Utils/embeds')
const randomMessages = require('../Utils/randomSelector')

exports.handleJoinLeft = (member) => {
  if (member.guild.channels.exists('name', 'general')) {
    member.guild.channels.find('name', 'general').send('Bloop')
  }
}

exports.handleBanKick = async(guild, user, action) => {
  console.log(guild)
  if (!guild.channels.exists('name', 'mod-log')) return
  let auditLog = await guild.fetchAuditLogs({ limit: 1 })
  let auditLogEntry = auditLog.entries.first()
  guild.channels.find('name', 'mod-log').send({ embed: embeds.modActionEmbed(action, auditLogEntry.executor, user, auditLogEntry.reason || 'There is none! ¯\\_(ツ)_/¯') })
}

exports.run = client => {
  client.on('guildBanAdd', (guild, user) => { exports.handleBanKick(guild, user, 'Ban') })
  client.on('guildBanRemove', (guild, user) => { exports.handleBanKick(guild, user, 'Unban') })
  client.on('guildMemberRemove', (member) => { exports.handleJoinLeft(member) })
  client.on('guildMemberAdd', (member) => { exports.handleJoinLeft(member) })
}

exports.help = {
  name: 'Handle guild member left',
  description: ''
}

exports.settings = {
  enabled: true,
  public: false
}
