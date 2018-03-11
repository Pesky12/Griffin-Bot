import admin from 'firebase-admin'
import { Collection } from 'discord.js';

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
  return checkCommandPerms(settings, message, cmd)
}

function addDefaultData (doc, settings) {
  doc.set(settings)
}

export function checkCommandPerms (user, permsUser, cmd, channel, settings) {
  if (settings.permissionsRequired[0] && !permsUser.has(settings.permissionsRequired[0], {checkAdmin: true})) return false
  if (settings.PM === false & channel.type !== 'text') return false
  if (cmd.settings.owneronly && user.id !== process.env.OWNER_ID) return false
  return true
}
