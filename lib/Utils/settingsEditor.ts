///<reference path="moduleClass.ts"/>
import { Guild, Message, RichEmbed, Collection, DMChannel, Client } from 'discord.js'

import { firestore } from 'firebase-admin'
import { Command, GuildCommandSetting } from './moduleClass'
import { Settings } from 'http2'

type SettingItem = {
  name: string
  desc: string
}

export class SettingsEditor {
  DMChannel?: DMChannel
  guild?: Guild
  message?: Message
  client?: Client

  constructor (_client: Client , _message: Message) {
    this.guild = _message.guild
    this.message = _message
    this.DMChannel = _message.author.dmChannel
    this.homeMenu()
  }

  public homeMenu () {
    if (this.DMChannel) {
      let list: Collection = new Collection()
      list = [{ name: 'item', desc: 'Item Desc' }].forEach(i => { list.set(i.name, i) })
      this.DMChannel.send({ embed: this.settingList(list, 'Main menu', 'You can type.') })
      this.DMChannel.awaitMessages((m: Message) => m.content.startsWith('lol') , { max: 1 })
    }
  }

  static addReactions (_count: number, _message: Message) {
    let emojiArray = ['1⃣', '2⃣', '3⃣', '4⃣', '5⃣', '6⃣', '7⃣', '8⃣', '9⃣']
    for (let counter = 0; counter <= _count; counter++) {
      _message.react(emojiArray[counter])
      console.log(counter)
    }
  }

  commandList (_list: Collection < String, Command > , _settings: Array<GuildCommandSetting>) {
    if (this.DMChannel) {
      let embed = new RichEmbed()
      _list.forEach((cmd: Command) => {
        embed.addField(cmd.settings.name, _settings.find(cmd.settings.name))
      })
      this.DMChannel.send()
    }
  }

  settingList (_list: Collection < String, SettingItem > , _title: string, _description: string) {
    let embed = new RichEmbed({
      title: _title,
      description: _description
    })
    _list.forEach((i: SettingItem) => {
      embed.addField(i, i.desc, false)
    })

    return embed
  }

  static listSettings () {
    return
  }

  static setSetting () {
    return
  }

  static fetchSetting () {
    return
  }
}

export function fetchAllSettings (guildID: string, type: string) {
  return new Promise((resolve, reject) => {
    let data = new Collection()
    firestore().collection('guilds').doc(guildID).collection(type).get().then(snapshot => {
      snapshot.forEach(snapshot => { data.set(snapshot.id ,snapshot.data()) })
      resolve(data)
    }).catch(reason => { reject(reason) })
  })
}
