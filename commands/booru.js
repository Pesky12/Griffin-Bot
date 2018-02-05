const embeds = require('../Utils/embeds')

exports.run = async(client, message, args) => {
  let booru = require('sfwbooru')
  if (message.channel.nsfw) booru = require('booru')
  let booruName = args[0]
  let tags = args.slice(1)
  booru.search(booruName, tags, { limit: 1, random: true })
  .catch(err => {
    if (err.message === 'Site not supported') message.channel.send(embeds.infoEmbed(err.message, 'Use ~help booru to see supported boorus'))
    else message.channel.send(embeds.infoEmbed('Problem searching booru', 'Try checking your tags or try later'))
  })
  .then(booru.commonfy)
  .then(image => { message.channel.send(embeds.booruEmbed(image[0])) })
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
