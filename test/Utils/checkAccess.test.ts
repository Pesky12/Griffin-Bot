import { expect } from 'chai'
import { checkAccess, checkIfPm } from '../../lib/Utils/checkAccess';
import { Client, GuildMember, GuildChannel } from 'discord.js';
import 'mocha'

const client = new Client()

describe('checkAccess', () => {
  it('Should return false if command is disabled', () => {
    let setting = {
      name: 'test',
      enabled: false,
      perms: []
    }
    expect(checkAccess(setting, null)).to.equal(false)
  })
})
