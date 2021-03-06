import * as nsfwbooru from 'booru'
import * as sfwbooru from 'sfwbooru'
import { DMChannel, GuildChannel, Message } from 'discord.js'
import { booruEmbed } from '../Utils/embeds'

exports.run = async (_message: Message, _args: Array<string>) => {
  let booru = sfwbooru
  if ((_message.channel instanceof DMChannel) || (_message.channel instanceof GuildChannel && _message.channel.nsfw)) {
	  booru = nsfwbooru
  }
  const booruName = _args[0]
  const tags = _args.slice(1)
  console.log(tags + booruName)
  booru.search(booruName, tags, { limit: 10, random: true })
  .catch((err: Error) => {
    if (!err.message.startsWith('Site not supported')) return console.error(err)
    return _message.channel.send('Not support ')
  })
  .then(booru.commonfy)
  .then((res: any) => {
    console.log(res)
    _message.channel.send({ embed: booruEmbed(res[0]) })
  })
}

exports.settings = {
  enabled: true,
  pm: true,
  name: 'booru',
  shortDesc: '',
  longDesc: '',
  usage: '',
  perms: ['SEND_MESSAGES']
}
