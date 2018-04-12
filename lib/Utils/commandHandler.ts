import { Client, GuildChannel, Message } from 'discord.js'
import { checkCommandPerms, getCommandSetting } from './checkAccess'
import { command } from './moduleClass'

export async function CommandHandler (client: Client, message: Message): Promise<void> {
  let prefix: any = process.env.PREFIX
  if (!message.content.startsWith(prefix)) return
  let messageHandle = message.content.split(' ')
  let args = messageHandle.slice(1)
  let commandName = messageHandle[0].slice(prefix.length)
  let command: command = client.commands.get(commandName)
  if (command) {
    let settings
    if (message.channel instanceof GuildChannel) {
      settings = await getCommandSetting(message.guild, command)
    } else {
      settings = command.GlobalSettings
    }
    console.log(settings)
    if (checkCommandPerms(command, settings, message)) command.run(message, args, client)
    console.log(`${message.author.tag} used ${commandName}`)
  }
}
