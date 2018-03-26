import { Client, Message } from 'discord.js'
import { checkCommandPerms, getCommandSetting } from '../Utils/checkAccess'

async function CommandHandler (client: Client, message: Message) {
  let prefix: any = process.env.PREFIX
  if (!message.content.startsWith(prefix)) return
  let messageHandle = message.content.split(' ')
  let args = messageHandle.slice(1)
  let commandName = messageHandle[0].slice(prefix.length)
  let command = client.commands.get(commandName)
  if (command) {
	  let settings = await getCommandSetting(message.guild, command)
    console.log(settings)
    if (checkCommandPerms(command, settings, message)) {
      command.run(message, args, client)
      console.log(`${message.author.tag} used ${commandName}`)
    }
  }
}

exports.run = (client: Client) => {
  client.on('message', message => {
    CommandHandler(client, message)
  })
}

exports.GlobalSettings = {
  enabled: true,
  name: 'translate'
}
