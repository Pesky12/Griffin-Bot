exports.run = (client, message, args) => {
  let recievers = message.mentions.users
  if (recievers.lenght < 1) {
    message.channel.send('Who is the lucky one i should send the :cookie: to?')
  }

  recievers.map(reciever => {
    if (reciever.id === process.env.OWNER_ID) return message.channel.send(`Anything for you Dad! Here is your :cookie: ${reciever}!`)
    if (reciever.id === process.env.FRIEND_ID) return message.channel.send(`Anything for my Dad's really close friend! There you go ${reciever} :cookie:`)
    if (reciever.id === client.user.id) return message.channel.send('Chirp! Thank you :heart:')
    if (reciever.id === message.author.id) return message.channel.send('Remember, sharing is caring!')
    message.channel.send(`Hey ${reciever} i got a :cookie: for you that ${message.author} ordered! I baked it with love :heart:`)
  })
}

exports.settings = {
  enabled: true,
  public: true,
  PM: true,
  owneronly: false,
  permissionsRequired: []
}

exports.help = {
  name: 'cookie',
  description: '🍪 Gives mentioned userss a cookie.',
  longDescription: '',
  usage: 'sandvich [mention]'
}
