import { Client } from 'discord.js'
import { loader } from './Utils/loader'
import { gClient } from './types'
import { CommandHandler } from './Utils/commandHandler'

const client = new Client() as gClient

client.events = loader(`${__dirname}/events/`, true, client)
client.commands = loader(`${__dirname}/commands/`, false, client)

client.on('message', message => {
  if (message.content.startsWith('~')) {
    let handler = new CommandHandler(client, message)
    let cmdName = message.content[0].slice(1)
    let args = message.content.split(' ')

    handler.setArgs(args)
    handler.findCMD(cmdName)
    if (handler.checkAccess()) {
      handler.execute()
    }
  }
})

client.login(process.env.DISCORD_TOKEN)
