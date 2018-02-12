const Discord = require('discord.js')

/**
 * @param {String} actionName
 * @param {Collection} executer
 * @param {Collection} target
 * @param {String} reason
 */
exports.modActionEmbed = (actionName, executer, target, reason) => {
  let embed = new Discord.RichEmbed()
    .setAuthor(executer.tag, executer.displayAvatarURL)
    .addField('Action', actionName, true)
    .addField('Target', target.tag, true)
    .addField('Reason', reason + ' ', true)
    .setTimestamp(new Date())
  return embed
}

exports.infoEmbed = (title, desc, color) => {
  let embed = new Discord.RichEmbed()
  .setTitle(title)
  .setDescription(desc)
  .setColor(color)
  return embed
}

exports.booruEmbed = (booruImage) => {
  let embed = new Discord.RichEmbed()
  .setTitle('Booru search')
  .addField('Artist', booruImage.artist.join(', '))
  .addField('Score', booruImage.score, true)
  .addField('Rating', booruImage.rating, true)
  .addField('Description', booruImage.description || 'None', true)
  .setImage(booruImage.file_url)
  return embed
}

exports.smallEmbedThumbnail = (title, desc, thumbnail) => {
  let embed = new Discord.RichEmbed()
  .setTitle(title)
  .setDescription(desc)
  .setThumbnail(thumbnail)
  return embed
}

exports.currencyEmbed = (response) => {
  let embed = new Discord.RichEmbed()
    .setAuthor(`${response['FROMSYMBOL']} => ${response['TOSYMBOL']}`)
    .addField('Price (USD)', response['PRICE'])
    .addField('Today\'s high', response['HIGHDAY'], true)
    .addField('Today\'s low', response['LOWDAY'], true)
    .setColor('#FFDF00')
    .setFooter('cryptocompare.com', 'https://freeter.io/embedding-web-apps/cryptocurrency/cryptocompare.png')
    .setTimestamp(new Date())
  return embed
}

exports.helpDescEmbed = (i) => {
  let helpIconUrl = 'https://cdn2.iconfinder.com/data/icons/flat-style-svg-icons-part-1/512/confirmation_verification-512.png'
  let embed = new Discord.RichEmbed()
  .setAuthor(process.env.PREFIX + i.help.name, helpIconUrl)
  .setDescription(i.help.longDescription || i.help.description)
  .addField('Usage', `${process.env.PREFIX}${i.help.usage}`)

  return embed
}

exports.helpDescEmbed = (user) => {
  let embed = new Discord.RichEmbed()
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

exports.profilePicEmbed = (user) => {
  let embed = new Discord.RichEmbed()
    .setAuthor('Link', user.displayAvatarURL, user.displayAvatarURL)
    .setColor('#1bba31')
    .setImage(user.displayAvatarURL)
  return embed
}

exports.translateEmbed = (translateArray) => {
  let embed = new Discord.RichEmbed()
    .setAuthor(`Translate: ${toTranslate}`, 'http://icons.iconarchive.com/icons/marcus-roberto/google-play/512/Google-Translate-icon.png')
    .addField('From:', translateArray.from.language.iso, true)
    .addField('To:', langTo, true)
    .addField('Output', translateArray)
    .setColor('#0273d6')
  if (translated.from.text.didYouMean || translated.from.text.autoCorrected) embed.addField('BTW did you mean?')
  return embed
}
