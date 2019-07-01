import { Message } from 'discord.js'
import { gClient, Command } from 'index'
export class CommandHandler {
  private client: gClient
  private msg: Message
  private cmd: Command
  private args: String[]

  constructor (client: gClient, msg: Message) {
    this.msg = msg
    this.client = client
  }

  findCMD (cmdName: String) {
    let cmds = this.client.commands
    return cmds.get(cmdName)
  }

  setArgs (args: String[]) {
    this.args = args
    return this.args
  }

  setCMD (cmd: Command) {
    this.cmd = cmd
    return this.cmd
  }

  checkAccess () {
    return true
  }

  execute () {
    this.cmd.run()
  }

}
