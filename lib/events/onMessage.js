import CommandHandler from './onMessage/commandHandler'

exports.run = (client, db) => {
  client.on('message', async(message) => { CommandHandler(client, message) })
}

exports.help = {
  name: 'DebugMessage',
  description: 'Spam machine'
}

exports.settings = {
  enabled: true,
  public: false
}
