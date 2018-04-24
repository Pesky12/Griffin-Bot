import { userJoin, userLeft } from '../Utils/randomSelector'
import { modActionEmbed } from '../Utils/embeds'
import { Client, Guild, GuildMember, User } from 'discord.js'

exports.handleJoin = (member: GuildMember) => {
  console.log(member)
  if (member.guild.channels.exists('name', 'general')) return member.guild.channels.find('name', 'general').send(userJoin(member))
}

exports.handleLeft = (member: GuildMember) => {
  if (member.guild.channels.exists('name', 'general')) return member.guild.channels.find('name', 'general').send(userLeft(member))
}

exports.handleBanKick = async (guild: Guild, user: User, action: any) => {
  console.log(guild)
  if (!guild.channels.exists('name', 'mod-log')) return
  let auditLog = await guild.fetchAuditLogs({ limit: 1 })
  let auditLogEntry = auditLog.entries.first()
  guild.channels.find('name', 'mod-log').send({ embed: modActionEmbed(action, auditLogEntry.executor, user, auditLogEntry.reason || 'There is none! ¯\\_(ツ)_/¯') })
}

exports.run = (client: Client) => {
  client.on('guildBanAdd', (guild: Guild, user: User) => { exports.handleBanKick(guild, user, 'Ban') })
  client.on('guildBanRemove', (guild: Guild, user: User) => { exports.handleBanKick(guild, user, 'Unban') })
  client.on('guildMemberRemove', (member: GuildMember) => { exports.handleLeft(member) })
  client.on('guildMemberAdd', (member: GuildMember) => { exports.handleJoin(member) })
}

exports.settings = {
  enabled: true,
  name: 'translate'
}
