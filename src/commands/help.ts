import { helpDescEmbed } from '../Utils/embeds'
import { getGuildSettings } from '../Utils/checkAccess'
import { Message, Client } from 'discord.js'
import { Command } from '../types'

exports.run = async (_message: Message, _args: String[], _client: Client) => {
  let cmd = _client.commands.get(_args[0])
  if (cmd) {
    return _message.channel.send(cmd)
  }
  const settings = getGuildSettings(_message.guild, _client)
  async function filterCommands () {
    let longest = Array.from(_client.commands.keys()).reduce((long, str) => Math.max(long, str.length), 0)
    let filteredList: string[] = []
    await _client.commands.forEach((cmd: Command) => {
      filteredList.push(`${cmd.settings.name}${' '.repeat(longest - cmd.settings.name.length)} | ${cmd.settings.shortDesc}`)
    })
    return filteredList
  }
  console.log(filterCommands())
  _message.channel.send(filterCommands())
}

exports.settings = {
  enabled: true,
  pm: false,
  name: 'help',
  shortDesc: '',
  longDesc: '',
  usage: '',
  perms: ['SEND_MESSAGES']
}
