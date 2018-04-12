import * as Jimp from 'jimp'
import { Message } from 'discord.js'

exports.run = (message: Message, args: Array<String>) => {
  message.channel.startTyping()
  let rip = args.join(' ')
  Jimp.read('http://tombgen.appspot.com/images/tombstone.png', (err, image) => {
    Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(font => {
      image.print(font, 143, 107, rip, 400)
      image.write(`../img/rip${message.author.id}.png`, () => {
        message.channel.send({ file: `../img/rip${message.author.id}.png` })
      })
    })
    if (err) { throw err }
  })
  message.channel.stopTyping()
}

exports.GlobalSettings = {
  enabled: true,
  pm: false,
  name: 'rip',
  shortDesc: '',
  longDesc: '',
  usage: ['']
}
