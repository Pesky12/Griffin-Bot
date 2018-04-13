import { helpDescEmbed } from '../Utils/embeds'

exports.run = async (message, args, client) => {
  let longest = Array.from(client.commands.keys()).reduce((long, str) => Math.max(long, str.length), 0)
  let helpList = []
  let command = client.commands.get(args[0])
  if (command) {
    if (!command.settings.public || command.settings.owneronly) return
    return message.channel.send({ embed: helpDescEmbed(command) })
  }
  let imustpromisecuzjs = client.commands.map(c => {
    helpList.push(`{ ${process.env.PREFIX}${c.GlobalSettings.name}${' '.repeat(longest - c.GlobalSettings.name.length)} : '${c.GlobalSettings.shortDesc}' }`)
  })
  await Promise.all(imustpromisecuzjs)
  message.channel.send(`Here is the list of commands you can use ❤\nTo see all the commands use ${process.env.PREFIX}help all\n${helpList.join('\n')}`, { code: 'css' })
}

exports.settings = {
  enabled: true,
  pm: false,
  name: 'help',
  shortDesc: '',
  longDesc: '',
  usage: ['']
}
