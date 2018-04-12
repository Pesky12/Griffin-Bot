import { Client, GuildChannel, GuildMember, User } from 'discord.js'

export function mockGuildMember (memberID, roles) {
  return new GuildMember(mockGuild(), {
    user: {},
    nick: 'Maid',
    roles: roles,
    joined_at: new Date(),
    deaf: false,
    mute: false
  })
}

export function mockUser (userID) {
  return new User(Client, {
    id: userID,
    userName: 'Testing User',
    discriminator: '1337',
    avatar: '8342729096ea3675442027381ff50dfe',
    verified: true
  })
}

export function mockGuild () {
  return new guildMember()
}

export function mockChannel (channelType, channelID) {
  let guildChannel = new GuildChannel(new Client(), {
    name: 'testChannel',
    createdAt: new Date(),
    id: channelID || 316762783512783
  })
  guildChannel.type = 'text'
  return guildChannel
}
