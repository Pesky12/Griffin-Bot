import * as nsfwbooru from 'booru'
import * as sfwbooru from 'sfwbooru'
import { Message, GuildChannel, DMChannel } from 'discord.js'
import { booruEmbed, infoEmbed } from '../Utils/embeds'

exports.run = async (message: Message, args: Array<string>) => {
  let booru = sfwbooru
  if ((message.channel instanceof DMChannel) || (message.channel instanceof GuildChannel && message.channel.nsfw)) {
	  booru = nsfwbooru
  }
  const booruName = args[args.length - 1]
  const tags = args.slice(args.length - 1)
  booru.search(booruName, tags, { limit: 1, random: true })
  .catch((err: Error) => {
  })
  .then(booru.commonfy)
  .then((image: string) => {
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
