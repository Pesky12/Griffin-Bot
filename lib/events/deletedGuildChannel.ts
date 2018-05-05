import { RichEmbed, Client } from 'discord.js'

exports.run = (client: Client) => {
  client.on('channelDelete', async (channel) => {
    if (!channel.guild.channels.exists('name', 'mod-log')) return
    let auditLog = await channel.guild.fetchAuditLogs({ limit: 1, type: 12 })
    let auditLogEntry = auditLog.entries.first()
    let oldValues: string[] = []
    auditLogEntry.changes.forEach((change: any) => {
      if (change.key === 'permission_overwrites') return
      oldValues.push(`${change.key}: ${change.old}`)
    })
    let embed = new RichEmbed()
        .setAuthor(`Channel #${channel.name}(${channel.id}) has been deleted!`)
        .addField('Old values', oldValues, true)
        .addField('Moderator', `${auditLogEntry.executor}`, true)
        .setColor('#c4350d')
        .setTimestamp(new Date())
    channel.guild.channels.find('name', 'mod-log').send({ embed })
  })
}

exports.settings = {
  enabled: false,
  name: 'translate'
}
