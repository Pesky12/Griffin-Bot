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
