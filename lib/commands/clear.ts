import { Client, Message } from 'discord.js';
exports.run = async(message: Message, args: Array<string>) => {
  let messagecount: number = parseInt(args[0], undefined)
  if (messagecount <= 1 || messagecount > 100) return message.channel.send('I can\'t delete this many messages!')
  await message.delete()
  await message.channel.fetchMessages({ limit: messagecount }).then(messages => { message.channel.bulkDelete(messages) })
  await message.channel.send(`:ok_hand: Deleted ${messagecount} messages`).then(botmsg => botmsg.delete(5000))
}

exports.settings = {
  enabled: true,
  public: true,
  PM: false,
  owneronly: false,
  permissionsRequired: ['MANAGE_MESSAGES']
}

exports.help = {
  name: 'clear',
  description: '🔧 Clears a defined number of messages.',
  longDescription: '',
  usage: 'purge [number]'
}
