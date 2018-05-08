import { Client } from 'discord.js'

import { loader } from './Utils/loader'
import { searchAnime } from './controllers/malAPI'

const client = new Client() as any

client.commands = loader(`${__dirname}/commands/`, false, client)
client.events = loader(`${__dirname}/events/`, true, client)

client.login(process.env.DISCORD_TOKEN)
