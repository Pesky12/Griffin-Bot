import { PermissionResolvable } from 'discord.js'

export type GlobalCommandSettings = {
  enabled: boolean
  pm: boolean
  name: string
  shortDesc: string
  longDesc: string
  usage: string
}

export type defaultCommandSettings = {
  perms: Array<PermissionResolvable>
}

export type GuildCommandSetting = {
  enabled: boolean
  perms: Array<PermissionResolvable>
}

export type EventSettings = {
  enabled: boolean
  name: string
}
