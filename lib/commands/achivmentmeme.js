import Jimp from 'jimp'
import awaitInput from '../Utils/inputAway'

exports.run = async(client, message, args) => {
  let rip = args.join(' ')
  var achievURL = 'https://www.minecraftskinstealer.com/achievement/a.php?i=1&h=Achievement+get%21&t='

  if (args.length < 1) {
    rip = await awaitInput.run(message.channel, 8000, 1, m => m.author.id === message.author.id, 'What is the name of the achievment?')
    rip = await rip.first().content
  }

  message.channel.startTyping()
  Jimp.read(achievURL, (err, image) => {
    Jimp.loadFont(Jimp.FONT_SANS_16_WHITE).then(font => {
      image.print(font, 59, 32, rip)
      image.write(`../img/achiv${message.author.id}.png`, () => {
        message.channel.send({file: `../img/achiv${message.author.id}.png`})
        message.channel.stopTyping()
      })
    })
    if (err) throw err
  })
}

exports.settings = {
  enabled: true,
  public: true,
  PM: true,
  owneronly: false,
  permissionsRequired: []
}

exports.help = {
  name: 'achiev',
  description: '🏆 Generates a Minecraft style achievement!',
  longDescription: '',
  usage: 'achiev [text]'
}
