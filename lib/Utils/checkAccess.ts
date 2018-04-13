import { DocumentSnapshot } from '@google-cloud/firestore'
import { Channel, DMChannel, GroupDMChannel, Guild, GuildMember, Message } from 'discord.js'
import { firestore } from 'firebase-admin'
import { Command, GlobalCommandSettings, GuildCommandSetting } from './moduleClass'

const db = firestore()

export async function getCommandSetting (guild: Guild, cmd: Command) {
  return new Promise((resolve, reject) => {
    const doc = db.collection('guilds').doc(guild.id).collection('commands').doc(cmd.settings.name)
    doc.get().then((snap: DocumentSnapshot) => {
      if (snap.exists) resolve(snap.data())
      resolve(addDefaultData(guild, cmd))
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
  let defaultData = {
    enabled: true,
    perms: cmd.settings.perms
  }
  db.collection('guilds').doc(guild.id).collection('commands').doc(cmd.settings.name).set(defaultData)
  return defaultData
}

export function checkCommandPerms (cmd: Command, settings: GuildCommandSetting, message: Message) {
  if (checkIfPm(message.channel, cmd.settings)) return true
  else return settings.enabled && checkIfChannelPerms(message.member, settings)
}

function checkIfChannelPerms (member: GuildMember, settings: GuildCommandSetting) {
  return member.hasPermission(settings.perms, false, true, true)
}

function checkIfPm (channel: Channel, settings: GlobalCommandSettings) {
  return (channel instanceof DMChannel || channel instanceof GroupDMChannel) && settings.pm
}
