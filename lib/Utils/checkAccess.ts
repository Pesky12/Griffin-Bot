import admin from 'firebase-admin'
import { Collection } from 'discord.js';

export async function getSettings (guildID, cmdName, collectionType) {
  const db = admin.firestore()
  const doc = db.collection('guilds').doc(guildID).collection(collectionType || 'commands').doc(cmdName)
  let settings
  await doc.get().then(snap => {
    if (!snap.data()) addDefaultData(doc, settings)
    settings = snap.data()
  })
  return settings
}

export async function addDefaultData (guildID, cmdName, settings, collectionType) {
  let data = await admin.firestore().collection('guilds').doc(guildID).collection(collectionType || 'commands').doc(cmdName).set(settings)
  console.log(data)
  return data
}

export async function getGuildSettings (guildID) {
  const db = admin.firestore()
  const dataReturn = await db.collection().doc(guildID).get(data => { return data.data() })
  return dataReturn
}

export function checkCommandPerms (user, permsUser, cmd, channel, settings) {
  if (!settings.enabled) return false
  if (settings.permissionsRequired[0] && !permsUser.has(settings.permissionsRequired[0], {checkAdmin: true})) return false
  if (cmd.settings.PM === false & channel.type !== 'text') return false
  if (cmd.settings.owneronly && user.id !== process.env.OWNER_ID) return false
  return true
}
