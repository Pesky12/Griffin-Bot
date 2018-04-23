import { Client } from 'discord.js'
import * as firebase from 'firebase-admin'

import { loader } from './Utils/loader'

const client = new Client()

console.log(`${__dirname}`)

client.commands = loader(`${__dirname}/commands/`, false, client)
client.events = loader(`${__dirname}/events/`, true, client)

client.login(process.env.DISCORD_TOKEN)
