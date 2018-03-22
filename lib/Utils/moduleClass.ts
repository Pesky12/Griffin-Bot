import { PermissionResolvable } from 'discord.js'

export interface ModuleSettings {
  name: string
  description: string
  enabled: boolean
}

export interface CommandSetting extends ModuleSettings {
  usage: string
  pm: boolean
  permsRequired: Array<PermissionResolvable>
}

export interface EventSetting extends ModuleSettings {
  public: boolean
}

