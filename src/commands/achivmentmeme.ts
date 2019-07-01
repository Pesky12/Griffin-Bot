import { Message } from 'discord.js'
import * as Jimp from 'jimp'

exports.run = async (_message: Message, _args: Array<string>) => {
  console.log(_message)
  console.log(_args)
  let achievURL = 'https://www.minecraftskinstealer.com/achievement/a.php?i=1&h=Achievement+get%21&t='
  let rip = _args.join(' ')

  _message.channel.startTyping()
  Jimp.read(achievURL, (err, image: any) => {
    image.loadFont(Jimp.FONT_SANS_16_WHITE).then((font: Jimp) => {
      image.print(font, 59, 32, rip)
      image.write(`../img/achiev${_message.author.id}.png`, () => {
        _message.channel.send({ file: `../img/achiev${_message.author.id}.png` })
        _message.channel.stopTyping()
      })
    })
    if (err) throw err
  })
}

exports.settings = {
  enabled: true,
  pm: true,
  name: 'achieve',
  shortDesc: '',
  longDesc: '',
  usage: '',
  perms: ['SEND_MESSAGES']
}
