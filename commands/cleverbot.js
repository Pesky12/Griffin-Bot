const Cleverbot = require('cleverbot-node')
const clbot = new Cleverbot()

module.exports.run = async(client, message, args, config) => {
  clbot.configure({ botapi: process.env.CLEVER_BOT_TOKEN })
  let Input = args.join()

  await clbot.write(Input, (response) => {
    message.channel.send(response.output).catch(console.error)
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
  name: 'cl',
  description: '💬 Talk to me!',
  longDescription: '',
  usage: 'cl [message]'
}
