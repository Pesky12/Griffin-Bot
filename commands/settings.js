const db = require('firebase-admin').firestore()

exports.run = (client, message, args, config) => {
  let cmd = client.commands.get(args[1])
  if (cmd.help.name === exports.help.name) return message.channel.send('You can\'t set the settings for settings.')
  if (cmd && args[0] === 'enable') {
    let doc = db.collection('guilds').doc(message.guild.id).collection('commands').doc(cmd.help.name)
    doc.get().then(snap => {
      doc.update({ enabled: !snap.data().enabled })
      message.channel.send(`Setting for ${cmd.help.name} in now: \`enabled: ${!snap.data().enabled}\``)
    })
  }
}

exports.settings = {
  enabled: true,
  public: false,
  PM: false,
  owneronly: false,
  permissionsRequired: ['MANAGE_GUILD']
}

exports.help = {
  name: 'settings',
  description: '',
  longDescription: '',
  usage: ''
}
