import { animeEmbed } from '../Utils/embeds'
import * as Mal from 'MALjs'
import { decode } from 'he'

const awaitInput = require('../Utils/inputAway')

exports.run = async(client, message, args, config) => {
  var animename = args.join(' ')
  var api = new Mal(config.MALlogin, config.MALpass)
  if (args.length < 1) {
    animename = await awaitInput.run(message.channel, 8000, 1, m => m.author.id === message.author.id, 'What anime?')
    if (!animename.first()) return
    animename = animename.first().content
  }

  api.anime.search(animename)
    .then(result => {
      result.synopsis = result.anime[0].synopsis.toString().replace(/<[^>]+>|\[[^>]+]/gi, '')
      result.synopsis = decode(result.synopsis)
      message.channel.send({ embed: animeEmbed(result) })
    })
    .catch(err => {
      message.channel.send(`❌ Sorry but i can't find ${animename}.`)
      console.log(err)
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
  name: 'anime',
  description: '🔍 Searches for anime on MAL.',
  longDescription: '',
  usage: 'anime [name]'
}
