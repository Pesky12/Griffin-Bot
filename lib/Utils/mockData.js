import { Message, User, Client, TextChannel, GuildMember, Guild, Channel, GuildChannel } from 'discord.js'

export function mockGuildMember (memberID, roles) {
  let userData = new GuildMember (mockGuild(), {
      "user": {},
      "nick": "Maid",
      "roles": roles,
      "joined_at": "2015-04-26T06:26:56.936000+00:00",
      "deaf": false,
      "mute": false
  }) 
}

export function mockUser (userID, roles) {
  return new User(Client, {
    id: userID,
    userName: 'Testing User',
    discriminator: '1337',
    avatar: '8342729096ea3675442027381ff50dfe',
    'verified': true,
  })
}

export function mockGuild () {
  let guildMem = new guildMember()
  return guildMember
}

export function mockChannel (channelType, channelID) {
  let guildChannel = new GuildChannel(new Client(), {
    name: 'testChannel',
    createdAt: new Date(),
    id: channelID || 316762783512783,
  })
  guildChannel.type = "text"
  return guildChannel
}