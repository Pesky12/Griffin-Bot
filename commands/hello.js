exports.run = (client, message, args) => {
  message.channel.send('**H E L L O  I  A M  A  B I R D**')
}

exports.settings = {
  enabled: true,
  public: false,
  PM: true,
  owneronly: false,
  permissionsRequired: []
}

exports.help = {
  name: 'hello',
  description: '👋 Hallo',
  longDescription: '',
  usage: 'hello'
}
