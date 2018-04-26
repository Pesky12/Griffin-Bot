import { expect } from 'chai'
import { checkAccess } from '../../lib/Utils/checkAccess'
import { GuildMember, Guild, Client } from 'discord.js';
import 'mocha'

describe('checkAccess', () => {
  it('Should return false if command is disabled', () => {
    let setting = {
      name: 'test',
      enabled: false,
      perms: []
    }
    expect(checkAccess(setting, new GuildMember(new Guild(new Client(), {}), {}))).to.equal(false)
  })
})
