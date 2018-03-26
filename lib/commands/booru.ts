import * as nsfwbooru from 'booru'
import * as sfwbooru from 'sfwbooru'
import { Message, GuildChannel, DMChannel } from 'discord.js'

exports.run = async (_message: Message, _args: Array<string>) => {
  let booru = sfwbooru
  if ((_message.channel instanceof DMChannel) || (_message.channel instanceof GuildChannel && _message.channel.nsfw)) {
	  booru = nsfwbooru
  }
  const booruName = _args[_args.length - 1]
  const tags = _args.slice(_args.length - 1)
  booru.search(booruName, tags, { limit: 1, random: true })
  .catch((err: Error) => {
    console.error(err)
  })
  .then(booru.commonfy)
  .then(() => {
    return
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
