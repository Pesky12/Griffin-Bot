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

exports.GlobalSettings = {
  enabled: true,
  pm: false,
  name: 'booru',
  shortDesc: '',
  longDesc: '',
  usage: ''
}

exports.GuildDefaultSettings = {
  enabled: true,
  perms: []
}
