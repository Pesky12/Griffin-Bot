import { Client } from 'discord.js'

exports.run = (client: Client) => {
  client.on('messageReactionAdd', (msg) => {
    console.log(msg.emoji.name)
  })
}

exports.GlobalSettings = {
  enabled: true,
  name: 'translate'
}
