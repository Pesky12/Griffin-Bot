import { DocumentData } from '@google-cloud/firestore'
import { resolve } from 'dns'

import { checkCommandPerms, getCommandSettings } from '../Utils/checkAccess'
import { helpDescEmbed } from '../Utils/embeds'
import { Client, Message } from 'discord.js'

exports.run = async (_message: Message, _args: Array<string>, _client: Client) => {
  let longest = Array.from(_client.commands.keys()).reduce((long, str) => Math.max(long, str.length), 0)
  let helpList = await filterList()
  let command = _client.commands.get(_args[0])
  if (command) return _message.channel.send({ embed: helpDescEmbed(command) })
  function filterList () {
    return new Promise(async (resolve, reject) => {
      let list: Array<DocumentData>
      let settings = await getCommandSettings(_message.guild)
      _client.commands.forEach((data: any) => {
        if (checkCommandPerms(data, settings.find(cmd.help.name), _message)) list.push(data)
        resolve(list)
      })
    })
  }

  _message.channel.send(`Here is the list of commands you can use ❤\nTo see all the commands use ${process.env.PREFIX}help all\n${helpList.join('\n')}`, { code: 'css' })
}

exports.GlobalSettings = {
  enabled: false,
  pm: false,
  name: 'help',
  shortDesc: '',
  longDesc: '',
  usage: ''
}

exports.GuildDefaultSettings = {
  enabled: true,
  perms: []
}
