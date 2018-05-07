import { Client, Message } from 'discord.js'

exports.run = (_message: Message, _args: Array<string>, _Client: Client) => {
  let receivers = _message.mentions.users
  if (receivers.size < 1) _message.channel.send('Who is the lucky one i should send the :cookie: to?')

  receivers.map(receiver => {
    if (receiver.id === process.env.OWNER_ID) return _message.channel.send(`Anything for you Dad! Here is your :cookie: ${receiver}!`)
    if (receiver.id === process.env.FRIEND_ID) return _message.channel.send(`Anything for my Dad's really close friend! There you go ${receiver} :cookie:`)
    if (receiver.id === _Client.user.id) return _message.channel.send('Chirp! Thank you :heart:')
    if (receiver.id === _message.author.id) return _message.channel.send('Remember, sharing is caring!')
    _message.channel.send(`Hey ${receiver} i got a :cookie: for you that ${_message.author} ordered! I baked it with love :heart:`)
  })
}

exports.settings = {
  enabled: true,
  pm: false,
  name: 'cookie',
  shortDesc: '',
  longDesc: '',
  usage: '',
  perms: ['SEND_MESSAGES']
}
