import { RichEmbed, Client } from 'discord.js'

exports.run = (client: Client) => {
  client.on('roleUpdate', (oldRole, newRole) => {
    if (oldRole.guild.channels.find('name', 'mod-log')) {
      let embed = new RichEmbed()
        .setAuthor(`Role '${oldRole.name}/${newRole.name}' has been updated`)
        .setDescription('For more info check the audit log')
        .setColor(newRole.hexColor)
        .setTimestamp(new Date())
      oldRole.guild.channels.find('name', 'mod-log').send({ embed })
    }
  })
}

exports.settings = {
  enabled: false,
  name: 'translate'
}
