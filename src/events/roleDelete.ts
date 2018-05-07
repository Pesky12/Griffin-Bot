import { RichEmbed, Client } from 'discord.js'

exports.run = (client: Client) => {
  client.on('roleDelete', (role) => {
    if (role.guild.channels.find('name', 'mod-log')) {
      let embed = new RichEmbed()
        .setAuthor(`Role '${role.name}'(${role.id}) has been deleted!`)
        .setDescription('For more info check the audit log')
        .addField('Color', `${role.hexColor}`, true)
        .addField('Role Created at', `${role.createdAt}`)
        .setColor(role.hexColor)
        .setTimestamp(new Date())
      role.guild.channels.find('name', 'mod-log').send({ embed })
    }
  })
}

exports.settings = {
  enabled: false,
  name: 'translate'
}
