import * as Cleverbot from 'cleverbot-node'
import { Message } from 'discord.js'

const clbot = new Cleverbot()
clbot.configure({ botapi: process.env.CLEVER_BOT_TOKEN })

exports.run = (_message: Message, _args: Array<string>) => {
  const Input = _args.join()
  clbot.write(Input, (output: any) => {
    _message.channel.startTyping()
    setTimeout(() => {
      _message.channel.send(output.message)
      _message.channel.stopTyping()
    }, 5000 * Math.random())
  })
}

exports.GlobalSettings = {
  enabled: true,
  pm: false,
  name: 'cl',
  shortDesc: '',
  longDesc: '',
  usage: ''
}

exports.GuildDefaultSettings = {
  enabled: true,
  perms: []
}
