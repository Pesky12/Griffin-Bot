const fs = require('fs')

exports.run = (loadFolder, collection, requiring, client, db) => {
  fs.readdir(loadFolder, (err, files) => {
    if (err) return console.error(err)
    let filesjs = files.filter(f => f.split('.').pop() === 'js')
    if (filesjs <= 0) return console.log('No commands to load mate!')
    console.log(`\nI am trying to load ${filesjs.length} files from ${loadFolder}, hold up!`)
    filesjs.forEach((f, i) => {
      let file = require(`${loadFolder}${f}`)
      if (file.settings.enabled === false) return console.log(`${i + 1}: ${f} is disabled and will not be loaded`)
      if (requiring) file.run(client, db)
      console.log(`${i + 1}: ${f} ready to fly!`)
      collection.set(file.help.name, file)
    })
    console.log('\n')
  })
}
