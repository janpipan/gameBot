const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();

//creates json data file
const fileName = 'data.json';
fs.appendFile(fileName,'', (err) => {
  if (err) throw err;
  console.log('File created');
});
const file = fs.readFileSync(fileName);

const content = JSON.parse(file);
console.log(file);
console.log(content);


const token = require('./config.json').token;
const guildID = require('./config.json').guildID;



client.on('ready', () => {
  console.log('Bot is online');
  //get data from users in server and outputs it to json data file
  client.users.cache.forEach((e)=>{
    console.log(e);
    content[e.id] = e;
  });
  fs.writeFile(fileName, JSON.stringify(content,null,1), (err) =>{
    if (err) throw err;
    console.log("Player data updated");
  });
});

client.on('presenceUpdate', (oldPresence, newPresence)=>{
  let members = client.guilds.cache.get(guildID).members;
  if(oldPresence.activities.length == 0){
    //console.log(members.cache.get().user.presence.activities[0].name);
  }

});


client.login(token);
