const Discord = require('discord.js')
const logChannel = process.env.LOG_CHANNNEL

/**
 * Sends a error to the "log" channel
 * @param {*Discord Client} client
 * @param {*Discord Channel} channel
 * @param {*Error Title} errTitle
 * @param {*Error Desc} errDesc
 * @param {*Colour} colour
 */
exports.throwErrorHighPriority = (client, channel, errTitle, errDesc, colour) => {
  client.channels.get(logChannel).send({
    embed: new Discord.RichEmbed()
        .setTitle(errTitle)
        .setDescription(errDesc)
        .setColor(colour)
        .setFooter(channel.name + '|' + channel.guild.name)
        .setTimestamp(new Date())
  })
}
