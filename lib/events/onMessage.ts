import { Client } from 'discord.js'
import { CommandHandler } from '../Utils/commandHandler'

exports.run = (client: Client) => {
  client.on('message', message => {
    CommandHandler(client, message)
  })
}

exports.GlobalSettings = {
  enabled: true,
  name: 'translate'
}
