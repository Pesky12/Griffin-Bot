import { infoEmbed } from '../Utils/embeds'
import { Client } from 'discord.js'

exports.run = (client: Client) => {
  client.on('warn', (warn) => {
    if (!client.channels.exists('id', process.env.LOG_CHANNEL)) return
    let logchannel: any = client.channels.get(process.env.LOG_CHANNEL)
    logchannel.send({ embed: infoEmbed('Discord Warn', warn, '#00000') })
  })
}

exports.settings = {
  enabled: false,
  name: 'translate'
}
