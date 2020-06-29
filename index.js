const Discord = require('discord.js');
const client = new Discord.Client();


const token = require('./config.json').token;
const guildID = require('./config.json').guildID;

client.on('ready', () => {
  console.log('bot is on');
});

client.on('presenceUpdate', (oldPresence, newPresence)=>{
  let members = client.guilds.cache.get(guildID).members;
  if(oldPresence.activities.length == 0){
    console.log(members.cache.get('371281508201398272').user.presence.activities[0].name);
  }

});

client.login(token);
