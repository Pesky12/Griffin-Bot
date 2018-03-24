import { Client, Message } from 'discord.js'
import * as Jimp from 'jimp'

import { awaitInput } from '../Utils/inputAway'

exports.run = async (client: Client, message: Message, args: Array<string>) => {
  let achievURL = 'https://www.minecraftskinstealer.com/achievement/a.php?i=1&h=Achievement+get%21&t='
  let rip = args.join(' ')

  if (args.length < 1) {
    let awaitIN = await awaitInput(message.channel, 8000, 1, (m: Message) => m.author.id === message.author.id, 'What is the name of the achievement?')
    rip = awaitIN.first().content
  }

  message.channel.startTyping()
  Jimp.read(achievURL, (err, image: Jimp) => {
    Jimp.loadFont(Jimp.FONT_SANS_16_WHITE).then((font: Jimp) => {
      image.print(font, 59, 32, rip)
      image.write(`../img/achiv${message.author.id}.png`, () => {
        message.channel.send({ file: `../img/achiv${message.author.id}.png` })
        message.channel.stopTyping()
      })
    })
    if (err) throw err
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
  name: 'achieve',
  description: '',
  longDescription: '',
  usage: ''
}
