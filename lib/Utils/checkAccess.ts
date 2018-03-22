import { DocumentSnapshot } from '@google-cloud/firestore'
import { Guild, Message } from 'discord.js'
import { firestore } from 'firebase-admin'

const db = firestore()

export async function getCommandSettings (guild: Guild, cmd: any) {
  const doc = db.collection('guilds').doc(guild.id).collection('commands').doc(cmd.help.name)
  return new Promise((resolve, reject) => {
    doc.get().then((snap: DocumentSnapshot) => {
      if (snap.data) {
        resolve(snap.data())
      } else {
        addDefaultData(guild, cmd)
        resolve(cmd.settings)
      }
    }).catch((reason: any) => { reject(reason) })
  })
}

function addDefaultData (guild: Guild, cmd: any) {
  return db.collection('guilds').doc(guild.id).collection('commands').doc(cmd.help.name).set(cmd.settings)
}

export function checkCommandPerms (cmd: any, settings: any, message: Message) {
  if (settings.enabled && message.member.hasPermission(settings.permissionsRequired, false, true, true)) {
    if (cmd.settings.PM === false && message.channel.type !== 'text') return false
    else return true
  } else return false
}
