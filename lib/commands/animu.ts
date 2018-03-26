import { Message, Collection } from 'discord.js'
import { decode } from 'he'
import * as Mal from 'MALjs'

import { animeEmbed } from '../Utils/embeds'

const awaitInput = require('../Utils/inputAway')

exports.run = async (message: Message, args: Array<string>) => {
  let api = new Mal(process.env.MAL_USERNAME, process.env.MAL_PASSWORD)
  let animeName = args.join(' ')
  if (args.length < 1) {
    let awaitName: Collection<Message, Message> = await awaitInput.run(message.channel, 8000, 1, (m: Message) => m.author.id === message.author.id, 'What anime?')
    if (!awaitName.first()) return
    animeName = awaitName.first().content
  }

  api.anime.search(animeName)
    .then((result: any) => {
      result.synopsis = result.anime[0].synopsis.toString().replace(/<[^>]+>|\[[^>]+]/gi, '')
      result.synopsis = decode(result.synopsis)
      message.channel.send({ embed: animeEmbed(result) })
    })
    .catch((err: Error) => {
      message.channel.send(`❌ Sorry but i can't find ${animeName}.`)
      console.log(err)
    })
}

exports.GlobalSettings = {
  enabled: true,
  pm: false,
  name: 'anime',
  shortDesc: '',
  longDesc: '',
  usage: ''
}

exports.GuildDefaultSettings = {
  enabled: true,
  perms: []
}
