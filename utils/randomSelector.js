/**
 *
 * @param {*collection} e Command executer
 * @param {*colletion} b  Banned user
 */
exports.ban = (e, b) => {
  let messages = [
    `${b} has been slashed by the hammer!`,
    `${b}, hammer by-bye!`

  ]
  return randomize(messages)
}

/**
 *
 * @param {*collection} u Targeted user
 * @param {*collection} a Name of the action.
 */
exports.botCant = (u, a) => {
  let messages = [
    `${u} has more power then me! I can't ${a} him`,
    `I can't ${a} ${u}, he has the high ground.`,
    `${u} has a blessing. I can't ${a} him!`,
    `I wish I could ${a} ${u}.`

  ]
  return randomize(messages)
}

function randomize (randomGreetings) {
  let randomNumber = Math.floor(Math.random() * randomGreetings.length)
  let greetings = randomGreetings[randomNumber]
  return greetings
}
