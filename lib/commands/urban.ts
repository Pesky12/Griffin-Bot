import urban from 'relevant-urban'
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
  public: true,
  PM: false,
  owneronly: false,
  permissionsRequired: []
}

exports.help = {
  name: 'urban',
  description: '🔧 Searches for a word/sentence on "Urban Dictionary"',
  longDescription: '',
  usage: 'urban [word | sentence]'
}
