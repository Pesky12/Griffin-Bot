import { Client, Message, GuildChannel } from 'discord.js'

import { getGuildSettings, checkIfPm, checkAccess } from './checkAccess'
import { Command, GuildSettings } from './moduleClass'

export async function CommandHandler (client: Client, message: Message): Promise<void> {
  let prefix: any = process.env.PREFIX
  if (!message.content.startsWith(prefix)) return
  let messageHandler = message.content.split(' ')
  let args = messageHandler.slice(1)
  let command = client.commands.get(messageHandler[0].slice(prefix.length)) as Command
  if (command) {
    if (message.channel instanceof GuildChannel) {
      getGuildSettings(message.guild, client).then((data: GuildSettings) => {
        console.log(data)
        console.log(data.commands.find(cmd => cmd.name === command.settings.name))
        if (checkAccess(data.commands.find(cmd => cmd.name === command.settings.name), message.member)) {
          runCommand(command)
        }
      })
    } else if (command.settings.pm) {
      console.log('boops')
      runCommand(command)
    }
  }

  function runCommand (command: Command) {
    command.run(message, args, client)
    console.log(`${message.author.tag} used ${command.settings.name}`)
  }
}
