import { Cleverbot } from 'clevertype'
import { Message } from 'discord.js'

const clbot = new Cleverbot(process.env.CLEVER_BOT_TOKEN)

exports.run = (_message: Message, _args: Array<string>) => {
  const id = _message.guild.id || _message.author.id
  getCl(_args.join(), id).then((cleverMsg: any) => {
    _message.channel.stopTyping()
    _message.channel.send(cleverMsg)
  })
}

exports.settings = {
  enabled: true,
  pm: false,
  name: 'cl',
  shortDesc: '',
  longDesc: '',
  usage: '',
  perms: ['SEND_MESSAGES']
}

export function getCl (Input: string, Id: string) {
  return new Promise((resolve) => {
    clbot.say(Input).then(resolve)
  })
}
