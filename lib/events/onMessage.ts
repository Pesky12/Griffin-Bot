import { Client } from 'discord.js'
import { CommandHandler } from '../Utils/commandHandler'

exports.run = (client: Client) => {
  client.on('message', message => {
    CommandHandler(client, message)
  })
}

exports.settings = {
  enabled: true,
  name: 'translate'
}
