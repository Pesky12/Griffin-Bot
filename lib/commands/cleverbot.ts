import * as Cleverbot from 'cleverbot-node'
import { Message } from 'discord.js'

const clbot = new Cleverbot()
clbot.configure({ botapi: process.env.CLEVER_BOT_TOKEN })

exports.run = (message: Message, args: Array<string>) => {
  const Input = args.join()
  clbot.write(Input, (output: any) => {
    message.channel.startTyping()
    setTimeout(() => {
      message.channel.send(output.message)
      message.channel.stopTyping()
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
