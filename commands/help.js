const embeds = require('../Utils/embeds')

exports.run = (client, message, args, config) => {
  let longest = Array.from(client.commands.keys()).reduce((long, str) => Math.max(long, str.length), 0)
  let helpList = []
  let command = client.commands.get(args[0])
  if (command) {
    if (!command.settings.public || command.settings.owneronly) return
    return message.channel.send({ embed: embeds.helpDescEmbed(command) })
  }
  client.commands.map(c => {
    if (!c.settings.public || c.settings.owneronly) return
    if (args[0] === 'all') {
      if (!c.settings.pm && message.channel.type === 'dm') return
      if (c.settings.permissionsRequired[0] && !message.guild.member(message.author).hasPermission(c.settings.permissionsRequired[0])) return
    }
    helpList.push(`{ ${process.env.PREFIX}${c.help.name}${' '.repeat(longest - c.help.name.length)} : '${c.help.description}' }`)
  })
  message.channel.send(`Here is the list of commands you can use ❤\nTo see all the commands use ${process.env.PREFIX}help all\n${helpList.join('\n')}`, { code: 'css' })
}

exports.settings = {
  enabled: true,
  public: true,
  pm: true,
  owneronly: false,
  permissionsRequired: []
}

exports.help = {
  name: 'help',
  description: '❔ It will show you this window!!',
  longDescription: '',
  usage: 'help [command]'
}
