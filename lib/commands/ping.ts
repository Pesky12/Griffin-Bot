import { Message } from 'discord.js'

exports.run = (message: Message) => {
  message.channel.send('Ping?!').then(msg => {
    msg.edit(`<:gun:333359555117580291> BANG! Ur dead! (Took me: ${msg.createdTimestamp - message.createdTimestamp}ms)`)
  })
}

exports.settings = {
  enabled: true,
  pm: false,
  name: 'ping',
  shortDesc: '',
  longDesc: '',
  usage: ['']
}
