import checkAccess from "../../Utils/checkAccess"

async function CommandHandler (client, message) {
  let prefix = process.env.PREFIX
  if (!message.content.startsWith(prefix)) return
  let messageHandle = message.content.split(' ')
  let args = messageHandle.slice(1)
  let commandName = messageHandle[0].slice(prefix.length)
  let command = client.commands.get(commandName)
  if (command) {
    let allowAccess = await checkAccess(message, command)
    if (!allowAccess) return
    command.run(client, message, args)
    console.log(`${message.author.tag} used ${commandName}`)
  }
}

exports.help = {
  name: 'DebugMessage',
  description: 'Spam machine'
}

export default CommandHandler
