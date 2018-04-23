let Discord = require('discord.js')
let client = new Discord.Client()

client.on('message', (message) => {
  if (message.content === '!boop' && message.author.id === client.user.id) {
    message.channel.send({ embed: new Discord.RichEmbed({
      "title": "AudeoBeem",
      "description": "Game on boy-o.    Make sure to subscribe to \"beem\" on today Spam and hate to each other in the comment section will not be tolerated, this will result in a flag",
      "url": "https://www.pornhub.com/view_video.php?viewkey=ph5ad3f5abccc16"
    })  
    .setAuthor('Youtube')
    .setThumbnail('https://yt3.ggpht.com/-Oek4XOaTAUE/AAAAAAAAAAI/AAAAAAAABII/NiYKmO12f04/s100-mo-c-c0xffffffff-rj-k-no/photo.jpg)')
  })
}
})

client.login('token')
