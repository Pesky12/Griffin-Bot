import { RichEmbed, Client } from 'discord.js'

exports.run = (client: Client) => {
  client.on('roleCreate', (role) => {
    if (role.guild.channels.find('name', 'mod-log')) {
      let embed = new RichEmbed()
        .setAuthor(`Role '${role.name}'(${role.id}) has been created!`)
        .setDescription('For more info check the audit log')
        .addField('Color', `${role.hexColor}`, true)
        .setColor(role.hexColor)
        .setTimestamp(new Date())
      role.guild.channels.find('name', 'mod-log').send({ embed })
    }
  })
}

exports.settings = {
  enabled: true,
  name: 'translate'
}
