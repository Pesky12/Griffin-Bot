import { Client } from 'discord.js'

exports.run = (client: Client) => {
  client.on('messageReactionAdd', (messageReaction) => {
    console.log(messageReaction)
  })
}

exports.GlobalSettings = {
  enabled: true,
  name: 'translate'
}
