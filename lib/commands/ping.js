exports.run = (client, message, args, config) => {
  if (message.author.id === process.env.OWNER_ID) { client.channels.get(args[0]).send(args.slice(1).join(' ')) }
  message.channel.send('Ping?!').then(msg => { msg.edit(`<:gun:333359555117580291> BANG! Ur dead! (Took me: ${msg.createdTimestamp - message.createdTimestamp}ms)`) })
}

exports.settings = {
  enabled: true,
  public: false,
  PM: true,
  owneronly: false,
  permissionsRequired: []
}

exports.help = {
  name: 'ping',
  description: '🏓 I wonder what it does.',
  longDescription: '',
  usage: 'ping'
}
