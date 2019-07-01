import { RichEmbed, User } from 'discord.js'

export function modActionEmbed (actionName: any, executer: User, target: User, reason: string) {
  return new RichEmbed()
    .setAuthor(executer.tag, executer.displayAvatarURL)
    .addField('Action', actionName, true)
    .addField('Target', target.tag, true)
    .addField('Reason', reason + ' ', true)
    .setTimestamp(new Date())
}

export function infoEmbed (title: string, desc: string, color: string) {
  return new RichEmbed()
    .setTitle(title)
    .setDescription(desc)
    .setColor(color)
}

export function booruEmbed (booruImage: any) {

  // if (booruImage.description) booruEmb.addField('Description', booruImage.description || 'None', true)
  return booruEmbed
}

export function smallEmbedThumbnail (title: string, desc: string, thumbnail: string) {
  return new RichEmbed()
    .setTitle(title)
    .setDescription(desc)
    .setThumbnail(thumbnail)
}

export function currencyEmbed (response: any) {
  return new RichEmbed()
    .setAuthor(`${response['FROMSYMBOL']} => ${response['TOSYMBOL']}`)
    .addField('Price (USD)', response['PRICE'])
    .addField('Today\'s high', response['HIGHDAY'], true)
    .addField('Today\'s low', response['LOWDAY'], true)
    .setColor('#FFDF00')
    .setFooter('cryptocompare.com', 'https://freeter.io/embedding-web-apps/cryptocurrency/cryptocompare.png')
    .setTimestamp(new Date())
}

export function helpDescEmbed (i: { help: { name: string; longDescription: any; description: any; usage: any; }; }) {
  let helpIconUrl = 'https://cdn2.iconfinder.com/data/icons/flat-style-svg-icons-part-1/512/confirmation_verification-512.png'
  return new RichEmbed()
    .setAuthor(process.env.PREFIX + i.help.name, helpIconUrl)
    .setDescription(i.help.longDescription || i.help.description)
    .addField('Usage', `${process.env.PREFIX}${i.help.usage}`)
}

export function userInfoEmbed (user: User) {
  return new RichEmbed()
    .setAuthor(`${user.tag}`, user.avatarURL)
    .setColor('#331dc4')
    .setThumbnail(user.avatarURL)
    .addField('Full Username', `${user.tag}`, true)
    .addField('User ID', `${user.id}`, true)
    .addField('Status', user.presence.status.charAt(0).toUpperCase(), true)
    .addField('Playing', user.presence.game || 'Nothing', true)
    .addField(`Joined Discord`, user.createdAt)
}

export function profilePicEmbed (user: User) {
  return new RichEmbed()
    .setAuthor('Link', user.displayAvatarURL, user.displayAvatarURL)
    .setColor('#1bba31')
    .setImage(user.displayAvatarURL)
}

export function urbanEmbed (res: { word: any; definition: any; example: any; urbanURL: any; thumbsUp: any; thumbsDown: any; }) {
  return new RichEmbed()
    .setAuthor(`Urban of "${res.word}"`)
    .setDescription(res.definition)
    .setColor('#17b3d6')
    .addField('Example', `${res.example}.`)
    .setFooter(`${res.urbanURL} | ⬆ ${res.thumbsUp} | ⬇ ${res.thumbsDown}`)
}

export function animeEmbed (result: any) {
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
