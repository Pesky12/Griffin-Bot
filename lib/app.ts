import { Client } from 'discord.js'
import * as firebase from 'firebase-admin'

import { loader } from './Utils/loader'

const client = new Client()

firebase.initializeApp({
  credential: firebase.credential.cert(require('../firebase.json')),
  databaseURL: `https://${process.env.DATABASE_URL}.firebaseio.com/`
})

client.commands = loader(`${__dirname}/commands/`, false, client)
client.events = loader(`${__dirname}/events/`, true, client)

client.login(process.env.DISCORD_TOKEN)
