import { DocumentSnapshot, DocumentData } from '@google-cloud/firestore'
import { Guild, Message, DMChannel, Channel, GroupDMChannel, GuildMember } from 'discord.js'
import { firestore } from 'firebase-admin'
const db = firestore()

export async function getCommandSetting (guild: Guild, cmd: any) {
  return new Promise((resolve, reject) => {
    const doc = db.collection('guilds').doc(guild.id).collection('commands').doc(cmd.GlobalSettings.name)
    doc.get().then((snap: DocumentSnapshot) => {
      if (snap.exists) resolve(snap.data())
      resolve(cmd.GuildDefaultSettings)
    }).catch(reject)
  })
}

export async function getCommandSettings (guild: Guild) {
  return new Promise((resolve, reject) => {
    let dataCollection: Array<DocumentData>
    const doc = db.collection('guilds').doc(guild.id).collection('commands')
    doc.get().then(snap => {
      snap.forEach(data => { dataCollection.push(data.data()) })
      resolve(dataCollection)
    }).catch(reject)
  })
}

function addDefaultData (guild: Guild, cmd: any) {
  return db.collection('guilds').doc(guild.id).collection('commands').doc(cmd.GlobalSettings.name).set(cmd.GuildDefaultSettings)
}

export function checkCommandPerms (cmd: any, settings: any, message: Message) {
  if (checkIfPm(message.channel, cmd.GlobalSettings)) return true
  else if (settings.enabled && checkIfChannelPerms(message.member, settings)) return true
  else return false
}

function checkIfChannelPerms (member: GuildMember, settings: any) {
  return member.hasPermission(settings.permissionsRequired, false, true, true)
}

function checkIfPm (channel: Channel, settings: any) {
  return ((channel instanceof DMChannel || channel instanceof GroupDMChannel) && settings.PM)
}
