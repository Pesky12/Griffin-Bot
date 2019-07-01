import { RichEmbed, Message } from 'discord.js'

export function sendErrorEmbed (client: { channels: { get: (arg0: string) => { send: (arg0: { embed: RichEmbed; }) => void; }; }; }, title: string, message: Message) {
  client.channels.get(process.env.LOG_CHANNEL).send({
    embed: new RichEmbed()
    .setAuthor(title)
      .addBlankField()
    .setDescription(message)
    .setTimestamp(new Date())
  })
}
