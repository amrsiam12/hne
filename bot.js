const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("567863961673007114")
setInterval(function() {
channel.send(`baba baba baba baba baba`);
}, 30)
})

client.login(process.env.BOT_TOKEN);