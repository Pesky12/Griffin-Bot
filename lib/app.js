import { Client, Collection, Message } from 'discord.js'
import firebase from 'firebase-admin'
import load, { loader } from './Utils/loader'
import firebaseAccount from '../firebase'
import { mockMessage, mockUser, MockMessage } from './Utils/mockData';

const client = new Client()

firebase.initializeApp({
  credential: firebase.credential.cert(firebaseAccount),
  databaseURL: `https://${process.env.DATABASE_URL}.firebaseio.com/`
})

client.commands = loader(`${__dirname}/commands/`, false, client)
client.events = loader(`${__dirname}/events/`, true, client)

client.login(process.env.DISCORD_TOKEN)
