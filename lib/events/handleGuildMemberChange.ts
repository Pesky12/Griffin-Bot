import { userLeft, userJoin } from '../Utils/randomSelector'
import { modActionEmbed } from '../Utils/embeds'

exports.handleJoin = (member, client) => {
  console.log(member)
  if (member.guild.channels.exists('name', 'general')) return member.guild.channels.find('name', 'general').send(userJoin(member))
}

exports.handleLeft = (member) => {
  if (member.guild.channels.exists('name', 'general')) return member.guild.channels.find('name', 'general').send(userLeft(member))
}

exports.handleBanKick = async (guild, user, action) => {
  console.log(guild)
  if (!guild.channels.exists('name', 'mod-log')) return
  let auditLog = await guild.fetchAuditLogs({ limit: 1 })
  let auditLogEntry = auditLog.entries.first()
  guild.channels.find('name', 'mod-log').send({ embed: modActionEmbed(action, auditLogEntry.executor, user, auditLogEntry.reason || 'There is none! ¯\\_(ツ)_/¯') })
}

exports.run = client => {
  client.on('guildBanAdd', (guild, user) => { exports.handleBanKick(guild, user, 'Ban') })
  client.on('guildBanRemove', (guild, user) => { exports.handleBanKick(guild, user, 'Unban') })
  client.on('guildMemberRemove', (member) => { exports.handleLeft(member) })
  client.on('guildMemberAdd', (member) => { exports.handleJoin(member) })
}

exports.help = {
  name: 'Handle guild member left',
  description: ''
}

exports.settings = {
  enabled: true,
  public: false
}
