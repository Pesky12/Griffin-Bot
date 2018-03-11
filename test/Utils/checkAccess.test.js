import { checkPerms, checkCommandPerms } from '../../lib/Utils/checkAccess';
import { mockUser, mockGuildMember, mockChannel } from '../../lib/Utils/mockData';
import assert from 'assert'
import { Permissions } from "discord.js"

process.env.OWNER_ID = 235047463017381888

describe('checkPerms', () => {
  const cmdNormal = require('../../lib/commands/help')
  const cmdPerms = require('../../lib/commands/ban')
  const cmdOwner = require('../../lib/commands/reload')
  const mockPermsRead = new Permissions("READ_MESSAGES")
  let mockPermsBan = new Permissions("BAN_MEMBERS")
  it('Should return true if there are no restrictions', () => {
    let functionMock = checkCommandPerms(mockUser(), mockPermsRead, cmdNormal, mockChannel(), cmdNormal.settings)
    assert.equal(true, functionMock)
  })
  it('Should return true if user has permissions', () => {
    let functionMock = checkCommandPerms(mockUser(), mockPermsBan, cmdPerms, mockChannel(), cmdPerms.settings)
    assert.equal(true, functionMock)
  })
  it('Should return false if user doesnt have permissions', () => {
    let functionMock = checkCommandPerms(mockUser(), mockPermsRead, cmdPerms, mockChannel(), cmdPerms.settings)
    assert.equal(false, functionMock)
  })
  it('Should return true if command is restricted to owner and user is an owner', () => {
    let functionMock = checkCommandPerms(mockUser(process.env.OWNER_ID), mockPermsRead, cmdOwner, mockChannel(), cmdOwner.settings)
    assert.equal(true, functionMock)
  })
  it('Should return false if command is restricted to owner and user is not an owner', () => {
    let functionMock = checkCommandPerms(mockUser(), mockPermsRead, cmdOwner, mockChannel(), cmdOwner.settings)
    assert.equal(false, functionMock)
  })
})