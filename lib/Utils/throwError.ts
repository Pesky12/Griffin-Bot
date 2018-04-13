import { RichEmbed } from 'discord.js'

export function sendErrorEmbed (client, title, message) {
  client.channels.get(process.env.LOG_CHANNEL).send({
    embed: new RichEmbed()
    .setAuthor(title)
      .addBlankField()
    .setDescription(message)
    .setTimestamp(new Date())
  })
}
