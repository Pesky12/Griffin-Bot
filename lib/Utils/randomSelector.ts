function randomize (randomGreetings) {
  let randomNumber = Math.floor(Math.random() * randomGreetings.length)
  return randomGreetings[randomNumber]
}

let messages = []

export function ban (e, b) {
  messages = [
    `${b} has been slashed by the hammer!`,
    `${b}, hammer by-bye!`,
    `${b}, fourty years in the gulag!`,
    `${b} get get get get got got got got.`,
    `${b} didn't rush B hard enough.`,
    `${b}, STOP! It's hammer time!`,
    `${b}, back to the void from which you came.`,
    `${b}, you have been selected to relocate to City 17.`,
    `${b}, walk the plank you scallywag!`,
    `${b} got ganked, yo.`,
    `${b}, we are unsubscribing and disliking.`,
    `You didn't follow the damn train, ${b}!`,
    `${b}, stop right there! You have commited crimes against the server and her people.`,
    `${b} got noscoped.`,
    `We no longer carry ${b} in our store, sorry for any inconvenience.`,
    `${b} has been destroyed by hippie powers.`,
    `File name ${b} has be deleted from this hard drive.`
  ]
  return randomize(messages)
}

export function warn (u) {
  messages = [
    `${u} has been warned`,
    `${u}, you have been naughty.`,
    `${u} shut fuck up.`,
    `${u}, stop tweakin.`,
    `${u} no soup for you!`,
    `Your wingspan isn't that impressive, ${u}.`,
    `${u} don't make us call your mother.`
  ]
  return randomize(messages)
}

export function botCant (u, a) {
  messages = [
    `${u} has more power then me! I can't ${a} him`,
    `I can't ${a} ${u}, he has the high ground.`,
    `${u} has a blessing. I can't ${a} him!`,
    `I wish I could ${a} ${u}.`
  ]
  return randomize(messages)
}

/**
 *
 * @param e
 * @param b
 */
export function kick (e, b) {
  messages = [
    `${b}, you know the rules, and so I!`,
    `${b}, take this time to reflect apon your actions.`,
    `${b} got the boot in the fruit!`,
    `You know, we got some powerful legs ${b}.`,
    `Into the time-out corner, ${b}, you've been bad.`,
    `${b}, Falcon KICK!`,
    `${b}, silence is golden, duct tape is silver, but kicking is a good alternative.`,
    `${b}, you have been temporarily locked out of this server, pay in DOGE to gain access again.`,
    `${b} oof ouch your bones!`,
    `R-E-S-P-E-C-T, find out what it means to me, ${b}!`,
    `Take a long, cold shower ${b} and think about what you have done.`,
    `Make ${b} less toxic again.`,
    `This American boot just kicked your ass back to Russia, ${b}!`,
    `${b} was abducted by aliens.`,
    `We jettisoned ${b} out of the airlock for being rather rude and obtuse.`,
    `${b} miss me with that weak shit dawg.`,
    `${b} has been kicked because "My name Jeff" gets funnier after the 100th time.`
  ]
  return randomize(messages)
}

export function mute (b) {
  messages = [
    `I ductaped ${b}'s mouth`
  ]
  return randomize(messages)
}

export function unmute (b) {
  messages = [
    `I un-ductaped ${b}'s mouth`
  ]
  return randomize(messages)
}

export function userJoin (b) {
  let messages = [
    `I saw that ${b} joined! Say hello to him`
  ]
  return randomize(messages)
}

export function userLeft (b) {
  let messages = [
    `Goodbye ${b}.`
  ]
  return randomize(messages)
}
