import { RichEmbed, Client } from 'discord.js'

exports.run = (client: Client) => {
  client.on('channelCreate', (channel) => {
    if (channel.type === 'dm') return
    if (channel.guild.channels.find('name', 'mod-log')) {
      let embed = new RichEmbed()
        .setAuthor(`Channel #${channel.name}(${channel.id}) has been created!`)
        .setDescription('For more info check the audit log')
        .addField('Type', `${channel.type}`)
        .setColor('#c4350d')
        .setFooter('Channel', client.user.avatarURL)
        .setTimestamp(new Date())
      channel.guild.channels.find('name', 'mod-log').send({ embed })
    }
  })
}

exports.GlobalSettings = {
  enabled: true,
  name: 'translate'
}
