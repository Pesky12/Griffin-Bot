import { Client, Message } from 'discord.js'
exports.run = (client: Client, message: Message) => {
  let receivers = message.mentions.users
  if (receivers.size < 1) message.channel.send('Who is the lucky one i should send the :cookie: to?')

  receivers.map(receiver => {
    if (receiver.id === process.env.OWNER_ID) return message.channel.send(`Anything for you Dad! Here is your :cookie: ${receiver}!`)
    if (receiver.id === process.env.FRIEND_ID) return message.channel.send(`Anything for my Dad's really close friend! There you go ${receiver} :cookie:`)
    if (receiver.id === client.user.id) return message.channel.send('Chirp! Thank you :heart:')
    if (receiver.id === message.author.id) return message.channel.send('Remember, sharing is caring!')
    message.channel.send(`Hey ${receiver} i got a :cookie: for you that ${message.author} ordered! I baked it with love :heart:`)
  })
}

exports.GlobalSettings = {
  enabled: true,
  pm: false,
  name: 'cookie',
  shortDesc: '',
  longDesc: '',
  usage: ''
}

exports.GuildDefaultSettings = {
  enabled: true,
  perms: []
}
