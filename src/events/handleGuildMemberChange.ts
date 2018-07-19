import { modActionEmbed } from '../Utils/embeds'
import { Client, Guild, GuildMember, User } from 'discord.js'

exports.handleJoin = (member: GuildMember) => {
  console.log(member)
  if (member.guild.channels.exists('name', 'general')) {
    let channel: any = member.guild.channels.find('name', 'general')
    channel.send(member.user.username)
  }
}

exports.handleLeft = (member: GuildMember) => {
  if (member.guild.channels.exists('name', 'general')) {
    let channel: any = member.guild.channels.find('name', 'general')
    channel.send(member.user.username)
  }
}

exports.handleBanKick = async (guild: Guild, user: User, action: any) => {
  console.log(guild)
  if (!guild.channels.exists('name', 'mod-log')) return
  let auditLog = await guild.fetchAuditLogs({ limit: 1 })
  let auditLogEntry = auditLog.entries.first()
  let channel: any = guild.channels.find('name', 'mod-log')
  channel.send({ embed: modActionEmbed(action, auditLogEntry.executor, user, auditLogEntry.reason || 'There is none! ¯\\_(ツ)_/¯') })
}

exports.run = (client: Client) => {
  client.on('guildBanAdd', (guild: Guild, user: User) => { exports.handleBanKick(guild, user, 'Ban') })
  client.on('guildBanRemove', (guild: Guild, user: User) => { exports.handleBanKick(guild, user, 'Unban') })
  client.on('guildMemberRemove', (member: GuildMember) => { exports.handleLeft(member) })
  client.on('guildMemberAdd', (member: GuildMember) => { exports.handleJoin(member) })
}

exports.settings = {
  enabled: false,
  name: 'translate'
}
