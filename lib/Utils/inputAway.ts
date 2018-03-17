import { RichEmbed, Collector, Message, Collection } from 'discord.js'

export async function awaitInput (channel, time, max, filter, title) {
  let embed = new RichEmbed()
          .setTitle(title)
          .setDescription('Awaiting input....')
          .setColor('#d15b12')
  let embedAwait = await channel.send({embed})
  let textRecived: Collection<Message, Message> = await channel.awaitMessages(filter, {time: time, max: max, errors: ['time']}).catch(() => {
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
