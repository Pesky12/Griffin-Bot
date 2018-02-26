import { booruEmbed, infoEmbed } from '../Utils/embeds'
import sfwbooru from 'sfwbooru'
import nsfwbooru from 'booru'

exports.run = async(client, message, args) => {
  let booru = sfwbooru
  if (message.channel.nsfw) booru = nsfwbooru
  let booruName = args[0]
  let tags = args.slice(1)
  booru.search(booruName, tags, { limit: 1, random: true })
  .catch(err => {
    if (err.message === 'Site not supported') message.channel.send(infoEmbed(err.message, 'Use ~help booru to see supported boorus'))
    else message.channel.send(infoEmbed('Problem searching booru', 'Try checking your tags or try later'))
  })
  .then(booru.commonfy)
  .then(image => {
    message.channel.send({ embed: booruEmbed(image) })
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
  name: 'booru',
  description: '🔍 Searches specified booru. (NSFW sites enabled/NSFW channels only).',
  longDescription: '',
  usage: 'booru [site] [tags] \nSupported sites and aliases (NSFW site list sfw are supported as well):\n e621.net | e6\ndanbooru.donmai.us | db\nrule34.xxx | r34\n rule34.paheal.net | paheal\n derpibooru.org | derp\n For better understanding of tag system read \'http://e926.net/help/tags\''
}
