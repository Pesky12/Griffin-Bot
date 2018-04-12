import { DocumentSnapshot } from '@google-cloud/firestore'
import { Channel, DMChannel, GroupDMChannel, Guild, GuildMember, Message } from 'discord.js'
import { firestore } from 'firebase-admin'
import { Command, GuildCommandSetting } from './moduleClass'

const db = firestore()

export async function getCommandSetting (guild: Guild, cmd: any) {
  return new Promise((resolve, reject) => {
    const doc = db.collection('guilds').doc(guild.id).collection('commands').doc(cmd.GlobalSettings.name)
    doc.get().then((snap: DocumentSnapshot) => {
      if (snap.exists) resolve(snap.data())
      addDefaultData(guild, cmd)
      resolve(cmd.GuildDefaultSettings)
    }).catch(reject)
  })
}

// export async function getCommandSettings (guild: Guild) {
//   return new Promise((resolve, reject) => {
//     let dataCollection: Array<DocumentData>
//     const doc = db.collection('guilds').doc(guild.id).collection('commands')
//     doc.get().then(snap => {
//       snap.forEach(data => { dataCollection.push(data.data()) })
//       resolve(dataCollection)
//     }).catch(reject)
//   })
// }

function addDefaultData (guild: Guild, cmd: Command) {
  let defaultData: GuildCommandSetting = {
    enabled: true,
    perms: cmd.settings.perms
  }
  return db.collection('guilds').doc(guild.id).collection('commands').doc(cmd.GlobalSettings.name).set()
}

export function checkCommandPerms (cmd: any, settings: GuildCommandSetting, message: Message) {
  if (checkIfPm(message.channel, cmd.GlobalSettings)) return true
  else return settings.enabled && checkIfChannelPerms(message.member, settings)
}

function checkIfChannelPerms (member: GuildMember, settings: any) {
  return member.hasPermission(settings.permissionsRequired, false, true, true)
}

function checkIfPm (channel: Channel, settings: any) {
  return (channel instanceof DMChannel || channel instanceof GroupDMChannel) && settings.PM
}
