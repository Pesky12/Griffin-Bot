import * as admin from 'firebase-admin'
import { Message, Client } from 'discord.js'

exports.run = (client: Client,message: Message, args: Array<string>) => {
  let cmd = client.commands.get(args[1])
  if (cmd.help.name === exports.help.name) return message.channel.send('You can\'t set the settings for settings.')
  if (cmd && args[0] === 'enable') {
    let doc = admin.firestore().collection('guilds').doc(message.guild.id).collection('commands').doc(cmd.help.name)
    doc.get().then(snap => {
      doc.update({ enabled: !snap.data().enabled })
      message.channel.send(`Setting for ${cmd.help.name} in now: \`enabled: ${!snap.data().enabled}\``)
    })
  }
}

exports.GlobalSettings = {
  enabled: true,
  pm: false,
  name: 'settings',
  shortDesc: '',
  longDesc: '',
  usage: ''
}

exports.GuildDefaultSettings = {
  enabled: true,
  perms: []
}