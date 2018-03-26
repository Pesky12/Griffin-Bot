import { Message, Client, RichEmbed } from 'discord.js'

exports.run = async (_message: Message, _args: Array<string>, _Client: Client) => {
  let invitelink = await _Client.generateInvite(8)
  let embed = new RichEmbed()
    .setTitle(`Infoboard for ${_Client.user.username}`)
    .setDescription('Here is some info about this bot!!')
    .addField('Uptime', `${_Client.uptime} Miliseconds`, true)
    .addField('Code Creator', _Client.users.get('235047463017381888').tag || 'Pesky12', true)
    .addField('Repo', 'https://bitbucket.org/Peskyn12/griffin-bot')
    .addField('Invite me!!', invitelink)
    .addField('Support', 'You can support on these platforms:')
    .addField('Dogecoin', 'D5M6JbBDUkBbRfppNZZeGuyWzAAqgjghPg')
    .setColor('#7f16ff')
    .setThumbnail(_Client.users.get('235047463017381888').avatarURL || '')
  _message.channel.send({ embed })
  console.log(embed)
}

exports.GlobalSettings = {
  enabled: true,
  pm: false,
  name: 'info',
  shortDesc: '',
  longDesc: '',
  usage: ''
}

exports.GuildDefaultSettings = {
  enabled: true,
  perms: []
}
