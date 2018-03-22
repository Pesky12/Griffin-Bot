exports.run = (client) => {
  client.on('ready', () => {
    console.log(`${client.user.tag} is up in ${client.guilds.size} guilds, for ${client.users.size} users! • ↄ •\nFlight started at ${new Date()}\nUsing Gbot by Pesky12!\nTook: ${process.uptime()} seconds!`)
    client.user.setPresence({ game: { name: `use ${process.env.PREFIX}help | Serving in: ${client.guilds.size} guilds!`, type: 0 } })
    client.channels.get(process.env.LOG_CHANNEL).send(`Bot started in ${client.guilds.size} guilds`)
  })
}

exports.help = {
  name: 'On ready',
  description: 'Ttriggered when bot starts sucessfully'
}

exports.settings = {
  enabled: true,
  public: false
}
