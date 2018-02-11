const embeds = require('../Utils/embeds')

exports.run = (client, config) => {
  client.on('guildBanRemove', async(guild, user) => {
    if (!guild.channels.exists('name', 'mod-log')) return
    let auditLog = await guild.fetchAuditLogs({ limit: 1, type: 23 })
    let auditLogEntry = auditLog.entries.first()
    guild.channels.find('name', 'mod-log').send({ embed: embeds.modActionEmbed('Unban', auditLogEntry.executor, user, auditLogEntry.reason || 'There is none! ¯\\_(ツ)_/¯') })
  })
}

exports.help = {
  name: 'User banned',
  description: 'Triggered when somebody is banned'
}

exports.settings = {
  enabled: true,
  public: true
}
