import { Collection, Message, RichEmbed } from 'discord.js'
import { searchAnime } from '../controllers/kitsu'

exports.run = async (_message: Message, _args: Array<string>) => {
  searchAnime(_args.join(' ')).then((result: any) => {
    let anime = result.data[0].attributes
    _message.channel.send({
      embed: new RichEmbed()
      .setAuthor(anime.canonicalTitle, anime.posterImage.small, result.data[0].links.self)
      .addField('Episodes', anime.episodeCount, true)
      .addField('Avg. rating', anime.averageRating, true)
      .addField('Start - End date', anime.startDate + '\n' + anime.endDate, true)
      .setDescription(anime.synopsis)
    })
  })
}

exports.settings = {
  enabled: true,
  pm: true,
  name: 'anime',
  shortDesc: '',
  longDesc: '',
  usage: '',
  perms: ['SEND_MESSAGES']
}
