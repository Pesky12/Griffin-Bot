function randomize (randomGreetings: string[]) {
  let randomNumber = Math.floor(Math.random() * randomGreetings.length)
  return randomGreetings[randomNumber]
}

let messages = []

/**
 * "Playing status text."
 */
export let playingStatus = [
  'Mlem',
  'Big SuS',
  'Big oof',
  'Get a big ole W',
  'Vape em dude',
  'ITSHAPPENING.JPEG',
  'Dont chicken out',
  'Blaze it up',
  'hhhhhhhhhh',
  'hahahehehoho',
  '*slurping noises*'
]

export function ban (user: String) {
  messages = [
    `${user} has been slashed by the hammer!`,
    `${user}, hammer by-bye!`,
    `${user}, forty years in the gulag!`,
    `${user} get get get get got got got got.`,
    `${user} didn't rush B hard enough.`,
    `${user}, STOP! It's hammer time!`,
    `${user}, back to the void from which you came.`,
    `${user}, you have been selected to relocate to City 17.`,
    `${user}, walk the plank you scallywag!`,
    `${user} got ganged, yo.`,
    `${user}, we are unsubscribing and disliking.`,
    `You didn't follow the damn train, ${user}!`,
    `${user}, stop right there! You have committed crimes against the server and her people.`,
    `${user} got noscoped.`,
    `We no longer carry ${user} in our store, sorry for any inconvenience.`,
    `${user} has been destroyed by hippie powers.`,
    `File name ${user} has be deleted from this hard drive.`
  ]
  return randomize(messages)
}

export function warn (user: String) {
  messages = [
    `${user} has been warned`,
    `${user}, you have been naughty.`,
    `${user} shut fuck up.`,
    `${user}, stop tweakin.`,
    `${user} no soup for you!`,
    `Your wingspan isn't that impressive, ${user}.`,
    `${user} don't make us call your mother.`
  ]
  return randomize(messages)
}

export function botCant (user: string, action: string) {
  messages = [
    `${user} has more power then me! I can't ${action} him`,
    `I can't ${action} ${user}, he has the high ground.`,
    `${user} has action blessing. I can't ${action} him!`,
    `I wish I could ${action} ${user}.`
  ]
  return randomize(messages)
}

export function kick (user: string) {
  messages = [
    `${user}, you know the rules, and so I!`,
    `${user}, take this time to reflect upon your actions.`,
    `${user} got the boot in the fruit!`,
    `You know, we got some powerful legs ${user}.`,
    `Into the time-out corner, ${user}, you've been bad.`,
    `${user}, Falcon KICK!`,
    `${user}, silence is golden, duct tape is silver, but kicking is a good alternative.`,
    `${user}, you have been temporarily locked out of this server, pay in DOGE to gain access again.`,
    `${user} oof ouch your bones!`,
    `R-E-S-P-E-C-T, find out what it means to me, ${user}!`,
    `Take action long, cold shower ${user} and think about what you have done.`,
    `Make ${user} less toxic again.`,
    `This American boot just kicked your ass back to Russia, ${user}!`,
    `${user} was abducted by aliens.`,
    `We jettisoned ${user} out of the airlock for being rather rude and obtuse.`,
    `${user} miss me with that weak shit dawg.`,
    `${user} has been kicked because "My name Jeff" gets funnier after the 100th time.`
  ]
  return randomize(messages)
}

export function mute (user: string) {
  messages = [
    `I removed ${user}'s mouth`
  ]
  return randomize(messages)
}

export function unmute (user: string) {
  messages = [
    `I un-removed ${user}'s mouth`
  ]
  return randomize(messages)
}

export function userJoin (user: string) {
  let messages = [
    `I saw that ${user} joined! Say hello to him`
  ]
  return randomize(messages)
}

export function userLeft (user: string) {
  let messages = [
    `Goodbye ${user}.`
  ]
  return randomize(messages)
}
