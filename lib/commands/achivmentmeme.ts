import { Message } from 'discord.js'
import * as Jimp from 'jimp'

import { awaitInput } from '../Utils/inputAway'

exports.run = async (_message: Message, _args: Array<string>) => {
  console.log(_message)
  console.log(_args)
  let achievURL = 'https://www.minecraftskinstealer.com/achievement/a.php?i=1&h=Achievement+get%21&t='
  let rip = _args.join(' ')

  if (_args.length < 1) {
    let awaitIN = await awaitInput(_message.channel, 8000, 1, (m: Message) => m.author.id === _message.author.id, 'What is the name of the achievement?')
    rip = awaitIN.first().content
  }

  _message.channel.startTyping()
  Jimp.read(achievURL, (err, image: Jimp) => {
    Jimp.loadFont(Jimp.FONT_SANS_16_WHITE).then((font: Jimp) => {
      image.print(font, 59, 32, rip)
      image.write(`../img/achiev${_message.author.id}.png`, () => {
        _message.channel.send({file: `../img/achiev${_message.author.id}.png`})
        _message.channel.stopTyping()
      })
    })
    if (err) throw err
  })
}

exports.settings = {
  enabled: true,
  pm: false,
  name: 'achieve',
  shortDesc: '',
  longDesc: '',
  usage: '',
  perms: ['']
}
