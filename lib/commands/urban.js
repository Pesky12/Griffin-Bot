import urban from 'relevant-urban'
import { urbanEmbed } from '../Utils/embeds'

exports.run = (client, message, args) => {
  let toUrban = args.join(' ') || 'Avian'
  urban(toUrban).then(res => { message.channel.send({embed: urbanEmbed(res)}) }).catch(err => {
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
