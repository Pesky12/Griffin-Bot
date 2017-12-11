const Discord = require('discord.js');

exports.run = (client, message) =>{
  var randomCat = require('random-cat');
  const catFacts = require('cat-facts');
  var img = randomCat.get();
  let fact = catFacts.random();
  setTimeout(() => {
    let embed = new Discord.RichEmbed()
      .setTitle('Cat fact and picture.')
      .setImage(img)
      .setColor('#ba881b')
      .setDescription(fact)
    message.channel.send({embed});
  }, Math.random() * (100 - 3) + 5 * 10);
  return;
};

exports.settings = {
  enabled: true,     
  public: true,
  PM: true,
  owneronly: false,
  permissionsRequired: [],
};

exports.help = {
  name: 'cat',
  description: '😺Tells you a cat fact and sends a random cat picture.',
  longDescription: "",
  usage: 'cat'
};
