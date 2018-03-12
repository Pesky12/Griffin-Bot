import { Client, Collection, Message } from 'discord.js'
import firebase from 'firebase-admin'
import load from './Utils/loader'
import firebaseAccount from '../firebase'
import { mockMessage, mockUser, MockMessage } from './Utils/mockData';

const client = new Client()

firebase.initializeApp({
  credential: firebase.credential.cert(firebaseAccount),
  databaseURL: `https://${process.env.DATABASE_URL}.firebaseio.com/`
})

client.commands = new Collection()
client.events = new Collection()
client.guildSettings = new Collection()

load(`${__dirname}/commands/`, client.commands, false, client)
load(`${__dirname}/events/`, client.events, true, client)

client.login(process.env.DISCORD_TOKEN)
