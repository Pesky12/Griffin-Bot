import { RichEmbed, Client } from 'discord.js'

exports.run = (client: Client) => {
  client.on('emojiCreate', (emoji: any) => {
    if (emoji.guild.channels.find('name', 'mod-log')) {
      let embed = new RichEmbed()
        .setAuthor('Emoji has been created!')
        .setDescription(`${emoji}\nFor more info check the audit log`)
        .setColor('#c4350d')
        .setThumbnail(emoji.url)
        .setFooter('Emoji', client.user.avatarURL)
        .setTimestamp(new Date())
      emoji.guild.channels.find('name', 'mod-log').send({ embed })
    }
  })
}

exports.settings = {
  enabled: false,
  name: 'newGuildEmoji'
}
