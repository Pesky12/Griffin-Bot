import { Message } from 'discord.js'
exports.run = async (_message: Message, _args: Array<string>) => {
  let messagecount: number = parseInt(_args[0], undefined)
  if (messagecount <= 1 || messagecount > 100) return _message.channel.send('I can\'t delete this many messages!')
  await _message.delete()
  await _message.channel.fetchMessages({ limit: messagecount }).then(messages => { _message.channel.bulkDelete(messages) })
  await _message.channel.send(`:ok_hand: Deleted ${messagecount} messages`).then(botmsg => botmsg.delete(5000))
}

exports.GlobalSettings = {
  enabled: true,
  pm: false,
  name: 'clear',
  shortDesc: '',
  longDesc: '',
  usage: ''
}

exports.GuildDefaultSettings = {
  enabled: true,
  perms: []
}
