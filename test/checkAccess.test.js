import { checkPerms, checkCommandPerms } from "../lib/Utils/checkAccess";
import { mockUser, mockGuildMember, mockChannel } from "../lib/Utils/mockData";
import assert from 'assert'
import { Permissions } from "discord.js";

describe('checkPerms', () => {
  let cmd = require('../lib/commands/ban')
  it('Should return true if command is not restricted.', () => {
    let mockPerms = new Permissions("BAN_MEMBERS")
    let functionMock = checkCommandPerms(mockUser(235047463017381888), mockPerms, cmd, mockChannel(), cmd.settings)
  assert.equal(true, functionMock)
  })
})