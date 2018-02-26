/**
 * Awaits chat input, returns collection
 * @param {*Discord Channel} channel
 * @param {*Time before timeout} time
 * @param {*Maximum of messages} max
 * @param {*Filters to apply} filter
 * @param {*Title of the awaiting embed} title
 */
exports.run = async(channel, time, max, filter, title) => {
  let embed = new RichEmbed()
          .setTitle(title)
          .setDescription('Awaiting input....')
          .setColor('#d15b12')
  let embedAwait = await channel.send({embed})
  var textRecived = await channel.awaitMessages(filter, {time: time, max: max, errors: ['time']}).catch(err => {
    let embedError = new RichEmbed()
          .setTitle('Invalid arguments.')
          .setColor('#d15b12')
    embedAwait.edit({embed: embedError})
  })
  if (!textRecived.first()) return
  embedAwait.edit({
    embed: new RichEmbed()
          .setTitle(title)
          .setColor('#d15b12')
  })
  return textRecived
}

exports.settings = {
  enabled: false,
  public: false
}