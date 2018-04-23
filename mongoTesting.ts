import { MongoClient } from "mongodb";
let uri = 'mongodb+srv://Chloe:PoZatQSx3Gr0jrIl@chloebot-ii0qt.mongodb.net/test'

MongoClient.connect(uri, (err, client) => {
  client.db('ChloeBot').collection('Guilds').insertOne({ "lol": Math.random() * Math.PI })
  client.close()
})
