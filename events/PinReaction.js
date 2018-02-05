exports.run = (client, config) => {
  let emoji = '📌'
  client.on('messageReactionAdd', (messageReaction, executer) => {
    console.log(messageReaction)
  })
}

exports.help = {
  name:"Role created",
  description: "Triggered when role is created"
}

exports.settings = {
  enabled: true,
  public: true
}
