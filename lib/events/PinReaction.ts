import { Client } from 'discord.js'

exports.run = (client: Client) => {
  client.on('messageReactionAdd', (msg) => {
    console.log(msg.emoji.name)
  })
}

exports.settings = {
  enabled: true,
  name: 'translate'
}
