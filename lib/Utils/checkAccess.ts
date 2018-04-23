import { Channel, Client, DMChannel, GroupDMChannel, Guild, GuildMember } from 'discord.js'
import { MongoClient } from 'mongodb'

import { Command, GlobalCommandSettings, GuildCommandSetting } from './moduleClass'

const db = MongoClient

export function getGuildSettings (guild: Guild, _client: Client): Promise<any> {
  return new Promise((resolve, reject) => {
    db.connect(process.env.MONGO_URI || '', (err, client) => {
      if (err) reject(err)
      const collection = client.db('Chloe').collection('Guilds')
      collection.findOne({ _id: guild.id }).then((data: GuildSettings) => {
        if (data) {
          console.log('settings')
          resolve(data)
        } else {
          generateGuild(guild, _client).then(data => {
            collection.insertOne(data)
            console.log(data)
            resolve(data)
          })
        }
      })
    })
  })
}

function generateGuild (guild: Guild, _client: Client) {
  return new Promise((resolve) => {
    let data = {
      _id: guild.id,
      prefix: process.env.PREFIX,
      commands: _client.commands.map((cmd: Command) => {
        return {
          name: cmd.settings.name,
          enabled: true,
          perms: cmd.settings.perms
        }
      })
    }
    resolve(data)
  })
}

export function checkAccess (settings: GuildCommandSetting, member: GuildMember) {
  if (settings.enabled) {
    return member.hasPermission(settings.perms, false, true, true)
  }
}

export function checkIfPm (channel: Channel, settings: GlobalCommandSettings) {
  return (channel instanceof DMChannel || channel instanceof GroupDMChannel) && settings.pm
}
