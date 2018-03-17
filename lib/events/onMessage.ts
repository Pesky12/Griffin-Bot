import { getSettings, checkCommandPerms } from "../Utils/checkAccess";

async function CommandHandler (client, message) {
  let prefix = process.env.PREFIX
  if (!message.content.startsWith(prefix)) return
  let messageHandle = message.content.split(' ')
  let args = messageHandle.slice(1)
  let commandName = messageHandle[0].slice(prefix.length)
  let command = client.commands.get(commandName)
  if (command) {
    let settings = await getSettings(message.guild.id, command.help.name)
    if (!checkCommandPerms(message.author.id, message.member.permissions, command, message.channel, settings || command.settings)) return
    command.run(client, message, args)
    console.log(`${message.author.tag} used ${commandName}`)
  }
}

exports.run = (client, db) => {
  client.on('message', async(message) => {
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

