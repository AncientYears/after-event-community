const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();

//Set up config
let token = JSON.parse(fs.readFileSync('bot.json')).token;
if (token == null || token == undefined) {
	console.err("Token is null.");
	process.exit(-1);
}

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content === "!test aec") {
    msg.reply("The After Event Community Bot is up and running!");
  }
});

client.login(token);