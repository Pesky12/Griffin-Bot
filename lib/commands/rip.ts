import Jimp from 'jimp'

exports.run = (client, message, args) => {
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

exports.settings = {
  enabled: true,
  public: true,
  PM: true,
  owneronly: false,
  permissionsRequired: []
}

exports.help = {
  name: 'rip',
  description: '🗿 Creates a tombstone with a defined text.',
  longDescription: '',
  usage: 'rip [text]'
}
