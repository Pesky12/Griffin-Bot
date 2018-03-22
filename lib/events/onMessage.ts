import { Client, Message } from 'discord.js'
import { getCommandSettings, checkCommandPerms } from '../Utils/checkAccess'

async function CommandHandler (client: Client, message: Message) {
  let prefix: any = process.env.PREFIX
  if (!message.content.startsWith(prefix)) return
  let messageHandle = message.content.split(' ')
  let args = messageHandle.slice(1)
  let commandName = messageHandle[0].slice(prefix.length)
  let command = client.commands.get(commandName)
  if (command) {
    let settings = await getCommandSettings(message.guild, command)
    console.log(settings)
    if (checkCommandPerms(command, settings, message)) {
      command.run(client, message, args)
      console.log(`${message.author.tag} used ${commandName}`)
    }
  }
}

exports.run = (client: Client) => {
  client.on('message', message => {
    CommandHandler(client, message)
  })
}

exports.help = {
  name: 'DebugMessage',
  description: 'Spam machine'
}

exports.settings = {
  enabled: true,
  public: false
}
