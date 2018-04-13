import { Client, GuildChannel, Message } from 'discord.js'
import { checkCommandPerms, getCommandSetting } from './checkAccess'
import { Command } from './moduleClass'

export async function CommandHandler (client: Client, message: Message): Promise<void> {
  let prefix: any = process.env.PREFIX
  if (!message.content.startsWith(prefix)) return
  let messageHandle = message.content.split(' ')
  let args = messageHandle.slice(1)
  let commandName = messageHandle[0].slice(prefix.length)
  let command: Command = client.commands.get(commandName)
  if (command) {
    let settings
    settings = (message.channel instanceof GuildChannel) ? await getCommandSetting(message.guild, command) : command.settings
    console.log(settings)
    command.run(message, args, client)
    console.log(`${message.author.tag} used ${commandName}`)
  }
}
