const Discord = require('discord.js')
const client = new Discord.Client()
const dotenv = require('dotenv')
const firebase = require('firebase-admin')
const firebaseAccount = require('./firebase.json')
const loader = require('./Utils/loader')

if (process.env.RUN_TYPE !== 'production') dotenv.load()

firebase.initializeApp({
  credential: firebase.credential.cert(firebaseAccount),
  databaseURL: `https://${process.env.DATABASE_URL}.firebaseio.com/`
})

client.commands = new Discord.Collection()
client.events = new Discord.Collection()
client.guildSettings = new Discord.Collection()

loader.run(`${__dirname}/commands/`, client.commands, false, client)
loader.run(`${__dirname}/events/`, client.events, true, client)

client.login(process.env.DISCORD_TOKEN)
