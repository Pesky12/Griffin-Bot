const permissionCheck = require('../../Utils/checkAccess').run

exports.run = async (client, message) => {
  let prefix = process.env.prefix
  let messageHandle = message.content.split(' ')
  let args = messageHandle.slice(1)
  let commandName = messageHandle[0].slice(prefix.length)
  let command = client.commands.get(commandName)

  if (command) {
    let allowAccess = await permissionCheck(message, command)
    if (!allowAccess) return
    command.run(client, message, args)
    console.log(`${message.author.tag} used ${commandName}`)
  }
}

exports.help = {
  name: 'DebugMessage',
  description: 'Spam machine'
}
