import { Collection, Message } from 'discord.js'
import { decode } from 'he'
import * as Mal from 'MALjs'

import { animeEmbed } from '../Utils/embeds'

const awaitInput = require('../Utils/inputAway')

exports.run = async (_message: Message, _args: Array<string>) => {
  let api = new Mal(process.env.MAL_USERNAME, process.env.MAL_PASSWORD)
  let animeName = _args.join(' ')
  if (_args.length < 1) {
    let awaitName: Collection<Message, Message> = await awaitInput.run(_message.channel, 8000, 1, (m: Message) => m.author.id === _message.author.id, 'What anime?')
    if (!awaitName.first()) return
    animeName = awaitName.first().content
  }

  api.anime.search(animeName)
    .then((result: any) => {
      result.synopsis = result.anime[0].synopsis.toString().replace(/<[^>]+>|\[[^>]+]/gi, '')
      result.synopsis = decode(result.synopsis)
      _message.channel.send({ embed: animeEmbed(result) })
    })
    .catch((err: Error) => {
      _message.channel.send(`❌ Sorry but i can't find ${animeName}.`)
      console.log(err)
    })
}

exports.settings = {
  enabled: true,
  pm: false,
  name: 'anime',
  shortDesc: '',
  longDesc: '',
  usage: ['']
}
