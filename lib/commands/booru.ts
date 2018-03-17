import * as nsfwbooru from 'booru'
import * as sfwbooru from 'sfwbooru'
import { Message } from 'discord.js'

import { booruEmbed, infoEmbed } from '../Utils/embeds'

exports.run = async (message: Message, args: Array<string>) => {
  let booru = sfwbooru
  if (message.channel.type === 'dm' || message.channel.nsfw) booru = nsfwbooru
  let booruName = args[0]
  let tags = args.slice(1)
  booru.search(booruName, tags, { limit: 1, random: true })
  .catch((err: Error) => {
    if (err.message === 'Site not supported') message.channel.send(infoEmbed(err.message, 'Use ~help booru to see supported boorus', '#00000'))
    else message.channel.send(infoEmbed('Problem searching booru', 'Try checking your tags or try later', '#00000'))
  })
  .then(booru.commonfy)
  .then((image: string) => {
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
