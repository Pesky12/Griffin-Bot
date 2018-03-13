import { checkPerms, checkCommandPerms, getSettings, getGuildSettings, addDefaultData } from '../../lib/Utils/checkAccess';
import { mockUser, mockGuildMember, mockChannel } from '../../lib/Utils/mockData';
import { Permissions } from "discord.js"
import { use, expect } from 'chai'

describe('checkCommandPerms', () => {
  const cmdNormal = require('../../lib/commands/help')
  const cmdPerms = require('../../lib/commands/ban')
  const cmdOwner = require('../../lib/commands/reload')
  const cmdDisabled = require('../../lib/commands/example command')
  const mockPermsRead = new Permissions("READ_MESSAGES")
  let mockPermsBan = new Permissions("BAN_MEMBERS")
  it('Should return false if the command is disabled', () => {
    expect(checkCommandPerms(mockUser(), mockPermsRead, cmdDisabled, mockChannel(), cmdDisabled.settings)).to.equal(false)
  })
  it('Should return true if there are no restrictions', () => {
    return expect(checkCommandPerms(mockUser(), mockPermsRead, cmdNormal, mockChannel(), cmdNormal.settings)).to.equal(true)
  })
  it('Should return true if user has permissions', () => {
    return expect(checkCommandPerms(mockUser(), mockPermsBan, cmdPerms, mockChannel(), cmdPerms.settings)).to.equal(true)
  })
  it('Should return false if user doesnt have permissions', () => {
    return expect(checkCommandPerms(mockUser(), mockPermsRead, cmdPerms, mockChannel(), cmdPerms.settings)).to.equal(false)
  })
  it('Should return true if command is restricted to owner and user is an owner', () => {
    return expect(checkCommandPerms(mockUser(process.env.OWNER_ID), mockPermsRead, cmdOwner, mockChannel(), cmdOwner.settings)).to.equal(true)
  })
  it('Should return false if command is restricted to owner and user is not an owner', () => {
    return expect(checkCommandPerms(mockUser(), mockPermsRead, cmdOwner, mockChannel(), cmdOwner.settings)).to.equal(false)
  })
})