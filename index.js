const Discord = require('discord.js');
const client = new Discord.Client();

//Set up config
const config = require("./config.js")
// config.js template
/*
  module.exports = {
    "token":"TOKEN_HERE",
    "prefix":"!"
  }
*/
if (!config.token) {
  console.err("Invalid token :0");
  process.exit(-1);
}
client.login(config.token);
Commands = {
  "test": async (msg) => {
    msg.channel.send("Oh look! G's stupid test message!")
  }
}
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setStatus('online');
  client.user.setPresence({
    game: {
      name: 'PARTY POOPER 3000',
      type: 0
    }
  });
});
client.on("message", msg => {
  if (!msg.guild || msg.author.bot) {
    return;
  }
  if (Object.keys(Commands).includes(msg.content.substr(config.prefix.length).split(" ")[0]) && msg.content.substr(0, config.prefix.length) == config.prefix) {
    Commands[msg.content.split(" ")[0]](msg)
  }
});