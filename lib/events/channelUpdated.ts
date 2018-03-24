import { RichEmbed, Client } from 'discord.js'

exports.run = (client: Client) => {
  client.on('channelUpdate', async (oldChannel, newChannel) => {
    if (!newChannel.guild.channels.exists('name', 'mod-log')) return
    let auditLog = await oldChannel.guild.fetchAuditLogs({ limit: 1, type: 11 })
    let auditLogEntry = auditLog.entries.first()
    let oldValues: Array<string> = []
    let newValues: Array<string> = []
    auditLogEntry.changes.forEach((change: any) => {
      if (change.key === 'permission_overwrites') return
      newValues.push(`${change.key}: ${change.new}`)
      oldValues.push(`${change.key}: ${change.old}`)
    })
    let embed = new RichEmbed()
        .setAuthor(`Channel #${oldChannel.name} has been modified!`)
        .addField('Moderator', auditLogEntry.executor)
        .addField('Changes', 'ᅠ', true)
        .addField('Old values', oldValues, true)
        .addField('New Values', newValues, true)
        .setColor('#c4350d')
        .setTimestamp(new Date())
    oldChannel.guild.channels.find('name', 'mod-log').send({ embed })
  })
}

exports.help = {
  name: 'Channel Updated',
  description: "Triggered when channel's perms, name, etc has been chanaged"
}

exports.settings = {
  enabled: true,
  public: true
}
