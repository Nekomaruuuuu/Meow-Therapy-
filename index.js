const Discord = require ("discord.js")
const client = new Discord.Client({intents:["Guilds","GuildMassage"]});

client.on("ready",() => {
  console.log('Logged in as ${client.user.tag}!')
})

client.on("massageCreate", msg => {
  if (msg.content === "ping") {
    msg.reply("pong")
  }
}) 

client.login(process.envg.TOKEN)