import * as urban from 'relevant-urban'
import { urbanEmbed } from '../Utils/embeds'
import { Message } from 'discord.js'

exports.run = (message: Message, args: Array<string>) => {
  let toUrban = args.join(' ') || 'Avian'
  urban(toUrban).then((res: Array<any>) => { message.channel.send({ embed: urbanEmbed(res) }) }).catch((err: Error) => {
    console.log(err)
    message.channel.send(`I can' find ${toUrban}.`)
  })
}

exports.settings = {
  enabled: true,
  pm: false,
  name: 'urban',
  shortDesc: '',
  longDesc: '',
  usage: '',
  perms: ['SEND_MESSAGES']
}
