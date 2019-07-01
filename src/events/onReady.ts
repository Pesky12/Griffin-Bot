import { Client } from 'discord.js'

exports.run = (client: Client) => {
  client.on('ready', () => {
    console.log(`${client.user.tag} is up in ${client.guilds.size} guilds, for ${client.users.size} users! • ↄ •\nFlight started at ${new Date()}\nUsing Gbot by Pesky12!\nTook: ${process.uptime()} seconds!`)
    client.user.setPresence({ game: { name: `use ${process.env.PREFIX}help | Serving in: ${client.guilds.size} guilds!` } })
    let channel: any = client.channels.get(process.env.LOG_CHANNEL)
    channel.send(`Bot started in ${client.guilds.size} guilds`)
  })
}

exports.settings = {
  enabled: true,
  name: 'onReady'
}
