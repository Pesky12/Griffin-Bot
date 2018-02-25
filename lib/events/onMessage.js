const commandHandler = require('./onMessage/commandHandler')

exports.run = (client, db) => {
  client.on('message', (message) => {
    commandHandler.run(client, message)
  })
}

exports.help = {
  name: 'DebugMessage',
  description: 'Spam machine'
}

exports.settings = {
  enabled: true,
  public: false
}
