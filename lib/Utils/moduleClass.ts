import { PermissionResolvable } from 'discord.js'

export class ModuleSettings {
  name: string
  description: string
  enabled: boolean
}

export class CommandSetting extends ModuleSettings {
  usage: string
  pm: boolean
  permsRequired: Array<PermissionResolvable>
}

export class EventSetting extends ModuleSettings {
  public: boolean
}
