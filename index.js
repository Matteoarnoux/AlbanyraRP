const Discord = require('discord.js');

var bot = new Discord.Client();

bot.on('ready',function() {
    bot.user.setGame('AlbanyraRP, !help');
    console.log('Le bot a bien été connecter');
});

bot.login(process.env.TOKEN);