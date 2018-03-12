import { RichEmbed } from 'discord.js'

export function modActionEmbed (actionName, executer, target, reason) {
  let embed = new RichEmbed()
      .setAuthor(executer.tag, executer.displayAvatarURL)
      .addField('Action', actionName, true)
      .addField('Target', target.tag, true)
      .addField('Reason', reason + ' ', true)
      .setTimestamp(new Date())
  return embed
}

export function infoEmbed (title, desc, color) {
  return new RichEmbed()
    .setTitle(title)
    .setDescription(desc)
    .setColor(color)
}

export function booruEmbed (booruImage) {
  return new RichEmbed()
    .setTitle('Booru search')
    .addField('Artist', booruImage.artist.join(', '))
    .addField('Score', booruImage.score, true)
    .addField('Rating', booruImage.rating, true)
    .addField('Description', booruImage.description || 'None', true)
    .setImage(booruImage.file_url)
}

export function smallEmbedThumbnail (title, desc, thumbnail) {
  let embed = new RichEmbed()
    .setTitle(title)
    .setDescription(desc)
    .setThumbnail(thumbnail)
  return embed
}

export function currencyEmbed (response) {
  let embed = new RichEmbed()
      .setAuthor(`${response['FROMSYMBOL']} => ${response['TOSYMBOL']}`)
      .addField('Price (USD)', response['PRICE'])
      .addField('Today\'s high', response['HIGHDAY'], true)
      .addField('Today\'s low', response['LOWDAY'], true)
      .setColor('#FFDF00')
      .setFooter('cryptocompare.com', 'https://freeter.io/embedding-web-apps/cryptocurrency/cryptocompare.png')
      .setTimestamp(new Date())
  return embed
}

export function helpDescEmbed (i) {
  let helpIconUrl = 'https://cdn2.iconfinder.com/data/icons/flat-style-svg-icons-part-1/512/confirmation_verification-512.png'
  let embed = new RichEmbed()
    .setAuthor(process.env.PREFIX + i.help.name, helpIconUrl)
    .setDescription(i.help.longDescription || i.help.description)
    .addField('Usage', `${process.env.PREFIX}${i.help.usage}`)

  return embed
}

export function userInfoEmbed (user) {
  let embed = new RichEmbed()
      .setAuthor(`${user.tag}`, user.avatarURL)
      .setColor('#331dc4')
      .setThumbnail(user.avatarURL)
      .addField('Full Username', `${user.tag}`, true)
      .addField('User ID', `${user.id}`, true)
      .addField('Status', user.presence.status.charAt(0).toUpperCase(), true)
      .addField('Playing', user.presence.game || 'Nothing', true)
      .addField(`Joined Discord`, user.createdAt)
  return embed
}

export function profilePicEmbed (user) {
  let embed = new RichEmbed()
      .setAuthor('Link', user.displayAvatarURL, user.displayAvatarURL)
      .setColor('#1bba31')
      .setImage(user.displayAvatarURL)
  return embed
}

export function urbanEmbed (res) {
  const embed = new RichEmbed()
    .setAuthor(`Urban of "${res.word}"`)
    .setDescription(res.definition)
    .setColor('#17b3d6')
    .addField('Example', `${res.example}.`)
    .setFooter(`${res.urbanURL} | ⬆ ${res.thumbsUp} | ⬇ ${res.thumbsDown}`)

  return embed
}

export function animeEmbed (result) {
  return new RichEmbed()
          .setDescription(result.synopsis)
          .setAuthor(`${result.anime[0].title} | ${result.anime[0].english}`, result.anime[0].image.toString())
          .setThumbnail(result.anime[0].image.toString())
          .setColor('#8d17d6')
          .addField('Episodes', result.anime[0].episodes, true)
          .addField('Type', result.anime[0].type, true)
          .addField('Score', result.anime[0].score, true)
          .addField('Status', result.anime[0].status, true)
          .addField('Start date', `${result.anime[0].start_date}`, true)
          .addField('End date', result.anime[0].end_date, true)
}
