const embeds = require('../Utils/embeds')

exports.run = (client, config) => {
  client.on('warn', (warn) => {
    if (!client.channels.exists(process.env.LOG_CHANNEL)) return
    client.channels.get(process.env.LOG_CHANNEL).send({ embed: embeds.infoEmbed('Discord Warn', warn) })
  })

  exports.help = {
    name: 'DebugMessage',
    description: 'Spam machine'
  }
}

exports.settings = {
  enabled: true,
  public: false
}
