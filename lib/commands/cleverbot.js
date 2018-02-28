import Cleverbot from 'cleverbot-node'
let clbot = new Cleverbot()

exports.run = async(client, message, args) => {
  console.log(message + '\n' + args)
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
