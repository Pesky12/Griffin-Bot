import * as fs from 'fs'
import { Collection, Client } from 'discord.js'

export function loader (loadFolder: string, requiring: boolean, client: Client) {
  let collection = new Collection()
  fs.readdir(loadFolder, (err, files) => {
    if (err) return console.error(err)
    let filesTS = files.filter(f => f.split('.').pop() === 'ts')
    if (!filesTS) return console.log('No commands to load mate!')
    console.log(`\nI am trying to load ${filesTS.length} files from ${loadFolder}, hold up!`)
    filesTS.forEach((f, i) => {
      let file = require(`${loadFolder}${f}`)
      if (file.settings.enabled === false) return console.log(`${i + 1}: ${f} is disabled and will not be loaded`)
      if (requiring) file.run(client)
      console.log(`${i + 1}: ${f} ready to fly!`)
      collection.set(file.help.name, file)
    })
    console.log('\n')
  })
  return collection
}
