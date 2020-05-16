const Discord = require("discord.js") 
const bot = new Discord.Client();
const client = new Discord.Client();
const fs = require('fs')
const prefix = "/";

bot.on('message', function(message) {
    if(message.author.id != bot.user.id) {
        if (message.channel.type == 'text')
            console.log('[' + message.guild.name + '][#' + message.channel.name + '][MSG] ' + message.author.username +
                '#' + message.author.discriminator + ': ' + formatConsoleMessage(message));
        else if (message.channel.type == 'dm')
            message.channel.sendMessage(':blush: Baap Boop tu peux add le logs du village sur ton serveur !' +
                'server!\nhttps://discordapp.com/oauth2/authorize?client_id=683353171393118254&scope=bot&permissions=8');
                message.channel.sendMessage(':yawning_face: Oui allo ? ah oui ! tu peux add le village Manager sur ton serveur !' +
                'server!\nhttps://discordapp.com/oauth2/authorize?client_id=683176642327478293&scope=bot&permissions=8');
                message.channel.sendMessage(':sweat_smile: Allez tu peux aussi add le Messager du village sur ton serveur !' +
                'server!\nhttps://discordapp.com/oauth2/authorize?client_id=683183840113590283&scope=bot&permissions=8');
    }
});

bot.on("message",message => {
    if(message.content.startsWith(prefix +"dm")){
        message.delete();
        let embed = new Discord.RichEmbed()
        .setTitle(":globe_with_meridians: • Comments Mpall ? • :globe_with_meridians:")
        .setURL("")
        .setColor("RANDOM")
        .setDescription(":warning: • /mpall ===> :white_check_mark: (Open) ")
        .setThumbnail("")
        .addField("Pour Mpall il suffit de faire .mpall [votre texte] . Nécésite les permissions ADMINISTRATEUR")
        .setAuthor(message.author.tag)
        .setTimestamp()
        .setImage("https://i.pinimg.com/originals/87/10/56/871056a9122b4e137b03e2bd88920ad1.gif")
        .setFooter('bot par killian', 'https://cdn.discordapp.com/avatars/673148681012117525/a_93fe2a5f1913546a2dd22497e118588d.gif')
         return message.channel.send(embed).then(msg => {msg.delete(10000)});
}})

const color = bot.on("message", function(message) {
    let args = message.content.trim().split(/ +/g);
    if (args[0].toLowerCase() === prefix + "embed") {
        message.delete()
    if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("❌ Tu n'as pas la permission d'utiliser cette commande!").then(msg => {msg.delete(3000)});
      if (!args[0])
        return message.channel.send(":warning: /embed [Ton texte] ===> :white_check_mark:").then(msg => {msg.delete(3000)});
      let question = args.slice(1).join(" ");
      const smembed = new Discord.RichEmbed()
        .setDescription(question)
        .setThumbnail("")
        .setImage('')
        .setFooter("");
      message.delete(prefix + "embed");
      message.channel.send(smembed);
    }
  });
  ``;
  bot.on("message", function(message) {
    let args = message.content.trim().split(/ +/g);
    if (args[0].toLowerCase() === prefix + "msg") {
        message.delete()
    if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("❌ Tu n'as pas la permission d'utiliser cette commande!").then(msg => {msg.delete(3000)});
      if (!args[0])
        return message.channel.send("")
      let question = args.slice(1).join(" ")
       message.channel.send(question)
    }
  });
  ``;
  

bot.login("NjgzMTgzODQwMTEzNTkwMjgz.XlqPCw.uGX7oX7N22Oz2qzmlecVNGS7hNY").catch(err=> console.log("Token Incorrect"));


bot.on('ready', () => {
const activities = [
    "Bot by killian 👒",
    "Add Messager du village 👋🏼",
    "Add logs village ✌🏼",
    "Add Village manager 👐🏼",
    "Village caché 💋",
    `Sur ${client.guilds.size} serveurs`,
    `/help --> Affiche l'aide !`

  ];
  bot.setInterval(() => {
      const index = Math.floor(Math.random() * activities.length);
      bot.user.setActivity(activities[index], {
          type: "STREAMING",
          url: "http://twitch.tv/client"
      });
  }, 10000);
});

bot.on('message', message => {

  let messageArray = message.content.split(" "); let cmd = messageArray[0]; let args = messageArray.slice(1);
           if (cmd === prefix + "mpall"){
      if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("❌ Tu n'as pas la permission d'utiliser cette commande!");
              if(message.channel.type === "dm") return;
              if(message.deletable) message.delete();

              message.channel.send("⚠️ Message envoyé avec succès !").then(msg => {msg.delete(100)});

              let MpMessage = args.slice(0).join(" ");

              message.guild.members.forEach(member => {
                  member.send(`${MpMessage}`)
                  console.log("Message envoyé avec succès aux utilisateurs ✅")
              })
          
          }
});
