import { Message } from 'discord.js'

exports.run = (_message: Message, _args: Array<string>) => {
  let messageCount: number = parseInt(_args[0], undefined)
  if (messageCount <= 2 || messageCount >= 100) {
    return _message.channel.send('I can\'t delete this many messages!')
  }
  _message.delete()
  _message.channel.fetchMessages({limit: messageCount}).then(messages => { _message.channel.bulkDelete(messages) })
  _message.channel.send(`:ok_hand: Deleted ${messageCount} messages`).then(botmsg => botmsg.delete(5000))
}

exports.settings = {
  enabled: true,
  pm: false,
  name: 'clear',
  shortDesc: '',
  longDesc: '',
  usage: '',
  perms: ['SEND_MESSAGES', 'MANAGE_MESSAGES']
}
