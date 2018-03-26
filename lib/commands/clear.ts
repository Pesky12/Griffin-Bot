import { Message } from 'discord.js'
exports.run = async (message: Message, args: Array<string>) => {
  let messagecount: number = parseInt(args[0], undefined)
  if (messagecount <= 1 || messagecount > 100) return message.channel.send('I can\'t delete this many messages!')
  await message.delete()
  await message.channel.fetchMessages({ limit: messagecount }).then(messages => { message.channel.bulkDelete(messages) })
  await message.channel.send(`:ok_hand: Deleted ${messagecount} messages`).then(botmsg => botmsg.delete(5000))
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
