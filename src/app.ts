import { Client } from 'discord.js'
import { loader } from './Utils/loader'
import { gClient } from './types'

const client = new Client() as gClient

client.events = loader(`${__dirname}/events/`, true, client)

client.login(process.env.DISCORD_TOKEN)
