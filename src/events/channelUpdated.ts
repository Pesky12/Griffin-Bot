import { Client } from 'discord.js'

exports.run = (client: Client) => {
  client.on('channelUpdate', async () => {
    return
  })
}

exports.settings = {
  enabled: false,
  name: 'translate'
}
