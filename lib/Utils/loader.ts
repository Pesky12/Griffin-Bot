import { Command } from './moduleClass'
import { Settings } from 'http2'
import * as fs from 'fs'
import { Collection, Client } from 'discord.js'

export function loader (loadFolder: string, requiring: boolean, client: Client) {
  let collection = new Collection()
  fs.readdir(loadFolder, (err, files) => {
    if (err) return console.error(err)
    console.log(`\nI am trying to load ${files.length} files from ${loadFolder}, hold up!`)
    files.forEach((f, i) => {
      let file: Command = require(`${loadFolder}${f}`)
      if (!file.settings.enabled) return console.log(`${i + 1}: ${f} is disabled and will not be loaded`)
      if (requiring) file.run(client)
      console.log(`${i + 1}: ${f} ready to fly!`)
      collection.set(file.settings.name, file)
    })
    console.log('\n')
  })
  return collection
}
