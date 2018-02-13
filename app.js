const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs')
const dotenv = require('dotenv')

if (process.env.RUN_TYPE !== 'production') dotenv.load()

client.commands = new Discord.Collection()
client.events = new Discord.Collection()

function loader (loadFolder, collection, requiring) {
  fs.readdir(loadFolder, (err, files) => {
    if (err) return console.error(err)
    let filesjs = files.filter(f => f.split('.').pop() === 'js')
    if (filesjs <= 0) {
      console.log('No commands to load mate!')
      return
    }
    console.log(`\n──────────────────────────────────────\n>I am trying to load ${filesjs.length} files from ${loadFolder}, hold up!`)
    filesjs.forEach((f, i) => {
      let file = require(`${loadFolder}${f}`)
      if (file.settings.enabled === false) return console.log(`${i + 1}: ${f} is disabled and will not be loaded`)
      if (requiring) file.run(client)
      console.log(`${i + 1}: ${f} ready to fly!`)
      collection.set(file.help.name, file)
    })
    console.log('──────────────────────────────────────')
  })
}

loader('./commands/', client.commands)
loader('./events/', client.events, true)

client.on('message', (message) => {
  let prefix = process.env.prefix
  let messageHandle = message.content.split(' ')
  let args = messageHandle.slice(1)
  let commandName = messageHandle[0].slice(prefix.length)
  let command = client.commands.get(commandName)

  if (command) {
    if (command.settings.permissionsRequired[0] && !message.guild.member(message.author).hasPermission(command.settings.permissionsRequired[0])) return message.channel.send('You don\'t have perms.')
    if (command.settings.PM === false & message.channel.type !== 'text') return message.channel.send('This command is not allowed in PMs!!')
    if (command.settings.owneronly && message.author.id !== process.env.OWNER_ID) return
    command.run(client, message, args)
    console.log(`${message.author.tag} used ${commandName}`)
  }
})

client.login(process.env.DISCORD_TOKEN)
