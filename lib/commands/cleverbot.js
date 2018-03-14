import Cleverbot from 'cleverbot-node'
const clbot = new Cleverbot()
clbot.configure({ botapi: process.env.CLEVER_BOT_TOKEN })

exports.run = (client, message, args) => {
  const Input = args.join()
  clbot.write(Input, (output) => {
    message.channel.startTyping()
    setTimeout(() => {
      message.channel.send(output.message)
      message.channel.stopTyping()
    }, 5000 * Math.random())
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
