import { Client } from 'discord.js'

exports.run = (client: Client) => {
  client.on('channelUpdate', async () => {
  })
}

exports.settings = {
  enabled: false,
  name: 'translate'
}
