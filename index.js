const Discord = require('discord.js');

const client = new Discord.Client();

const { Client, MessageEmbed, User } = require('discord.js');

const prefix = "$";

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
		{ name: 'Patreon', value: 'https://patreon.com/shaggyBot (Help me out!)', inline: false },
		{ name: 'Twitter', value: 'https://twitter.com/Skelly15111862 (Not active since Twitter is crap)', inline: false },
    { name: 'YouTube', value: 'https://www.youtube.com/channel/UCTRi5-Up7T81BuiTEiFfRfw (Working on it)', inline: false },
    { name: 'Twitch', value: 'https://www.twitch.tv/shain28twitch (Coding Live!)', inline: false },)
	.addField(':police_officer: **Moderation**', 'Commands to keep your server safe, Learn using $Help Mod or Moderation', false)
  .addField(':partying_face: **Giveaways**', 'Coming Soon', false)
  .addField(':video_game: **Fun**', 'Fun Commands to use with $Help Fun')
  .addField(':page_with_curl: **Information**', 'Learn Information about the Bot $Help Info or Information')
	.setImage('https://i1.sndcdn.com/avatars-000690165539-hns2em-t500x500.jpg')
	.setTimestamp()
	.setFooter('©️Team Skelly', 'https://i1.sndcdn.com/avatars-000690165539-hns2em-t500x500.jpg');
  message.channel.send(embed);
  console.log(`embed has been sent!`)   
  }
});


client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === '$Help Moderation') {
  const embed = new MessageEmbed()
	.setColor('0x00ff02')
	.setTitle('Moderation')
	.setURL('https://sites.google.com/view/shaggybot/home/')
	.setAuthor('Moderation', 'https://i1.sndcdn.com/avatars-000690165539-hns2em-t500x500.jpg', 'https://sites.google.com/view/shaggybot/home')
	.setDescription('Lets say you got this bot for security for your **Server** well start learning commands! **(2 Commands per page)**')
	.setThumbnail('https://i1.sndcdn.com/avatars-000690165539-hns2em-t500x500.jpg')
  .addField( 'More Coming!','**Lot more comming!**', false )
  .addField('$Kick [User ID or Username]', 'A strong Command that kicks anyone from the server', false)
  .addField('$Ban [User ID or Username]', 'A powerful Commandthat bans anyone', false)
  message.channel.send(embed);
  console.log(`embed has been sent!`) 
 }
});

client.on('message', message => {
  // If the message is "how to embed"
  if (message.content ===  '$Help Fun') {
  const embed = new MessageEmbed()
	.setColor('0x00ff02')
	.setTitle('Fun')
	.setURL('https://sites.google.com/view/shaggybot/home/')
	.setAuthor('Fun', 'https://i1.sndcdn.com/avatars-000690165539-hns2em-t500x500.jpg', 'https://sites.google.com/view/shaggybot/home')
	.setDescription('You want to play with the bot well have Fun with the Commands')
	.setThumbnail('https://i1.sndcdn.com/avatars-000690165539-hns2em-t500x500.jpg')
  .addField( 'More Coming!','**Lot more comming!**', false )

  message.channel.send(embed);
  console.log(`embed has been sent!`) 
 }
}); 

client.on('message', message => {
  // If the message is "how to embed"
  if (message.content ===  '$Help Info') {
  const embed = new MessageEmbed()
	.setColor('0x00ff02')
	.setTitle('Information')
	.setURL('https://sites.google.com/view/shaggybot/home/')
	.setAuthor('Information', 'https://i1.sndcdn.com/avatars-000690165539-hns2em-t500x500.jpg', 'https://sites.google.com/view/shaggybot/home')
	.setDescription('Learn about the Shaggy Bot*')
	.setThumbnail('https://i1.sndcdn.com/avatars-000690165539-hns2em-t500x500.jpg')
  .addField( 'More Coming!','**Lot more comming!**', false )
  .addField('$ver', 'Tells the version of the bot', false)
  .addField('$info ', 'Info about bot', false)
  .addField('$Shaggy', 'Shaggy', false)
  message.channel.send(embed);
  console.log(`embed has been sent!`) 
 }
});

client.on('message', (message) => {
  if ((/asshole/gm).test(message.content)) {
    message.delete().then(() => {
      message.reply('Do not swear!'); // Sends: "@user1234 Do not swear!"
      console.log(`Member has been warned`)  
    });
  }
});

client.on("message", msg => {
  if (msg.content === "$Info") {
    msg.reply("Shaggy bot is a bot made by Team Skelly");
    console.log(`Message sent`)
  }
})

client.on("message", msg => {
  if (msg.content === "$ver") {
    msg.reply("Ver 0.4/Puplic Beta");
    console.log(`Message sent`)
  }
})


client.on("message", msg => {
  if (msg.content === "$ShainDev") {
    msg.reply("Shaggy bot is a bot made by Team Skelly");
    console.log(`Message sent`)
  }
})

client.on('message', message => {

  if (!message.guild) return;


  if (message.content.startsWith('$Kick')) {
    
    const user = message.mentions.users.first();
   
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            message.reply(`Successfully kicked ${user.tag}`);
            console.log(`Kick went Successfully`)
          })
          .catch(err => {
            message.reply('Hes too o St Strong');
            console.log(`A permission error`)
            
            console.error(err);
          });
      } else {
        
        message.reply("TYPO!");
        console.log(`Kick went Unsuccessfully`)
      }
     
    } else {
      message.reply("Bruh who are ya kicking?!");
      console.log(`Kick went Unsuccessfully`)
    }
  }
});
  


client.on('message', message => {
 
  if (!message.guild) return;

 
  if (message.content.startsWith('$Ban')) {
    const user = message.mentions.users.first();
  
    if (user) {
 
      const member = message.guild.member(user);
     
      if (member) {
        member
          .ban({
            reason: 'They were breaking the rules',
          })
          .then(() => {
            message.reply(`Successfully banned ${user.tag}`);
            console.log(`Ban went Successfully`)
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.reply('Hes too o St Strong');
            console.log(`A permission error`)
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("TYPO!");
        console.log(`Ban went Unsuccessfully`)
      }
    } else {
      // Otherwise, if no user was mentioned
      message.reply("Bruh who are ya banning?");
      console.log(`Ban went Unsuccessfully`)
    }
  }
});

client.on('message', async message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === '$join') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
    } else {
      message.reply('Hmm where?');
const dispatcher = connection.play('./Dream.mp3');

dispatcher.on('$Mstart', () => {
	console.log('audio.mp3 is now playing!');
});

dispatcher.on('finish', () => {
	console.log('audio.mp3 has finished playing!');
});

// Always remember to handle errors appropriately!
dispatcher.on('error', console.error);  //Unused
}
  }
});
  
keepAlive()
client.login(process.env.TOKEN)

 