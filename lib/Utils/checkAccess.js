import admin from 'firebase-admin'

export async function checkAccess (message, cmd) {
  let db = admin.firestore()
  let doc = db.collection('guilds').doc(message.guild.id).collection('commands').doc(cmd.help.name)
  let settings = {
    enabled: true,
    permissionsRequired: cmd.settings.permissionsRequired,
    roleRequired: []
  }
  await doc.get().then(async snap => {
    if (!snap.data()) addDefaultData(doc, settings)
    settings = snap.data()
  })
  return checkPerms(settings, message, cmd)
}

function addDefaultData (doc, settings) {
  doc.set(settings)
}

export function checkPerms (settings, message, cmd) {
  if (!settings.enabled) return false
  if (settings.permissionsRequired[0] && !message.guild.member(message.author).hasPermission(settings.permissionsRequired)) return false
  if (settings.PM === false & message.channel.type !== 'text') return false
  if (cmd.settings.owneronly && message.author.id !== process.env.OWNER_ID) return false
  return true
}
