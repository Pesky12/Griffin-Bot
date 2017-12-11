const Discord = require('discord.js');

module.exports.run = async(client, message, args) =>{
  let user = message.mentions.users.first() || message.author
    let fakeLoadEmbed = new Discord.RichEmbed()
      .setAuthor('Searching....')
      .setColor('#f77a04')

    let msg = await message.channel.send({embed: fakeLoadEmbed})

    let finishedEmbed = new Discord.RichEmbed()
      .setAuthor('Link', user.displayAvatarURL,user.displayAvatarURL)
      .setColor('#1bba31')
      .setImage(user.displayAvatarURL);

    await message.channel.send({embed: finishedEmbed})

    msg.delete()
}

exports.settings = {
  enabled: true,     
  public: true,
  PM: true,
  owneronly: false,
  permissionsRequired: [],
};

exports.help = {
  name: 'profilepic',
  description: `🖨 Grabs mentioned user's profile pic.`,
  longDescription: "",
  usage: 'profilepic [mention]'
};