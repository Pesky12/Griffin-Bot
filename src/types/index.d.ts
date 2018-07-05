import { PermissionResolvable, Client } from 'discord.js'
export type GlobalCommandSettings = {
  enabled: boolean
  pm: boolean
  name: string
  shortDesc: string
  longDesc: string
  usage: string
  perms: Array<PermissionResolvable>
}
export type Event = {
  run: void
  settings: EventSettings
  eventSettings: Array<any>
}
export type Command = {
  run: Function
  settings: GlobalCommandSettings
  commandSettings: Array<any>
  guildCommandSetting: GuildCommandSetting
}
export type GuildCommandSetting = {
  name: string
  enabled: boolean
  perms: Array<any>
}
export type EventSettings = {
  enabled: boolean
  name: string
}
export type GuildSetting = {
  _id: number
  prefix: string
  commands: Array<GuildCommandSetting>
}

export class gClient extends Client {
  events: any
} 
