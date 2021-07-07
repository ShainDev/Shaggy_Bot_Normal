const Discord = require("discord.js")
const client = new Discord.Client()

const { Client, MessageEmbed } = require('discord.js');

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.content === "$Shaggy") {
    msg.reply("Shaggy is Cool!");
  }
})

   const keepAlive = require("./server") 

client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === '$Help') {
  const embed = new MessageEmbed()
	.setColor('0x00ff02')
	.setTitle('Shaggy Bot!')
	.setURL('https://sites.google.com/view/shaggybot/home/')
	.setAuthor('Shaggy lol', 'https://i1.sndcdn.com/avatars-000690165539-hns2em-t500x500.jpg', 'https://sites.google.com/view/shaggybot/home')
	.setDescription('A Fun bot by a wise man')
	.setThumbnail('https://i1.sndcdn.com/avatars-000690165539-hns2em-t500x500.jpg')
	.addFields(
		{ name: 'Shaggy Bugs', value: 'If YOU need help with the Bot or have any ideas Join DA server https://discord.gg/r75D4pJgDp' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Patreon', value: 'https://patreon.com/shaggyBot (Help me out!)', inline: true },
		{ name: 'Twitter', value: 'https://twitter.com/Skelly15111862 (Not active since Twitter is crap)', inline: true },
    { name: 'YouTube', value: 'https://www.youtube.com/channel/UCTRi5-Up7T81BuiTEiFfRfw (Working on it)', inline: true },
	)
	.addField('$Shaggy', 'Shaggy Talks', true)
	.setImage('https://i1.sndcdn.com/avatars-000690165539-hns2em-t500x500.jpg')
	.setTimestamp()
	.setFooter('©️Team Skelly', 'https://i1.sndcdn.com/avatars-000690165539-hns2em-t500x500.jpg');
  message.channel.send(embed);   
  }
});

client.on('message', (message) => {
  if ((/asshole/gm).test(message.content)) {
    message.delete().then(() => {
      message.reply('Do not swear!'); // Sends: "@user1234 Do not swear!"
    });
  }
});

client.on("message", msg => {
  if (msg.content === "$Info") {
    msg.reply("Shaggy bot is a bot made by Team Skelly");
  }
})

client.login(process.env.TOKEN)