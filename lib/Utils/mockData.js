import { Message, User, Client, TextChannel, GuildMember, Guild } from 'discord.js'

export function mockUser () {
  let UserData = new User(Client, {
    'id': '80351110224678912',
    'username': 'Nelly',
    'discriminator': '1337',
    'avatar': '8342729096ea3675442027381ff50dfe',
    'verified': true,
    'email': 'nelly@discordapp.com'
  })
  return UserData
}

export function mockGuildMember () {
  let guildMember = new GuildMember(Guild, {
    'id': '41771983423143937',
    'application_id': null,
    'name': 'Discord Developers',
    'icon': 'SEkgTU9NIElUUyBBTkRSRUkhISEhISEh',
    'splash': null,
    'owner_id': '80351110224678912',
    'region': 'us-east',
    'afk_channel_id': '42072017402331136',
    'afk_timeout': 300,
    'embed_enabled': true,
    'embed_channel_id': '41771983444115456',
    'verification_level': 1,
    'default_message_notifications': 0,
    'explicit_content_filter': 0,
    'mfa_level': 0,
    'widget_enabled': false,
    'widget_channel_id': '41771983423143937',
    'roles': [],
    'emojis': [],
    'features': ['INVITE_SPLASH'],
    'unavailable': false
  })
  return guildMember
}

export function MockMessage () {
  let messageMock = new Message(TextChannel, mockGuildMember() + mockUser(), mockUser)
  return messageMock
}
