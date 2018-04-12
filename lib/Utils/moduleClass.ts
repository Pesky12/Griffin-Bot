import { PermissionResolvable } from 'discord.js'

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
  run: void
  settings: GlobalCommandSettings
  commandSettings: Array<any>
}

export type GuildCommandSetting = {
  enabled: boolean
  perms: Array<PermissionResolvable>
}

export type EventSettings = {
  enabled: boolean
  name: string
}
