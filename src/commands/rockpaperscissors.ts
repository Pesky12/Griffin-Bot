import { Message } from 'discord.js'

exports.run = (message: Message, args: Array<string>) => {
  let userChoice = args.join(' ')

  let randomNumber: number = Math.random()
  let computerChoice: string
  if (randomNumber < 0.34) computerChoice = 'rock'
  else if (randomNumber <= 0.67) computerChoice = 'paper'
  else computerChoice = 'scissors'
  let choice = compare(userChoice, computerChoice)
  message.channel.send(`I choose ${computerChoice}!!\n${choice}`)
}

exports.settings = {
  enabled: true,
  pm: false,
  name: 'rps',
  shortDesc: '',
  longDesc: '',
  usage: '',
  perms: ['SEND_MESSAGES']
}

function compare (choice1: string, choice2: string) {
  if (choice1 === choice2) {
    return 'Looks like we tied!'
  }
  if (choice1 === 'rock') {
    if (choice2 === 'scissors') return 'I *rock* at this game!'
    return 'I lost :c'
  }
  if (choice1 === 'paper') {
    if (choice2 === 'scissors') return 'See you can\'t beat an *cutting* edge AI!'
    else return 'I lost :c'
  }
  if (choice1 === 'scissors') {
    if (choice2 === 'paper') return 'I cut like a god!'
    else return 'I lost'
  }
}
