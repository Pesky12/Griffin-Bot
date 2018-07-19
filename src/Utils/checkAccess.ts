import { Channel, Client, DMChannel, GroupDMChannel, Guild, GuildMember } from 'discord.js'
import { MongoClient } from 'mongodb'
import { Command, GuildCommandSetting, GlobalCommandSettings } from '../types'
import { gClient } from 'index'

const db = MongoClient

export function getGuildSettings (guild: Guild, _client: gClient): Promise<any> {
  return new Promise((resolve, reject) => {
    db.connect(process.env.MONGO_URI || '', (err, client) => {
      if (err) reject(err)
      const collection = client.db('Chloe').collection('Guilds')
      collection.findOne({ _id: guild.id }).then((data: any) => {
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

function generateGuild (guild: Guild, _client: gClient) {
  return new Promise((resolve) => {
    let data = {
      _id: guild.id,
      prefix: process.env.PREFIX,
      commands: _client.commands.map(cmd => {
        let command = cmd as Command
        return {
          name: command.settings.name,
          enabled: true,
          perms: command.settings.perms
        }
      })
    }
    resolve(data)
  })
}

export function checkAccess (settings: GuildCommandSetting, member: GuildMember) {
  if (settings.enabled) {
    return member.hasPermission(settings.perms, false, true, true)
  } else {
    return false
  }
}

export function checkIfPm (channel: Channel, settings: GlobalCommandSettings) {
  return ((channel instanceof DMChannel) || (channel instanceof GroupDMChannel)) && settings.pm
}
