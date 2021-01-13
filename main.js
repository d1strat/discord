const Discord = require('discord.js');


const client = new Discord.Client();


const prefix = '.';

const fs = require('fs');

client.commands = new Discord.Collection();


const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));



for(const file of commandFiles){
    const command = require(`./commands/${file}`);



    client.commands.set(command.name, command)
}



client.once('ready', () => {
    console.log('disc.bot is online!');
});

client.on('message', message =>{

    message.member.roles.cache.has


    if(!message.content.startsWith(prefix) || message.author.bot) return;


    const args = message.content.slice(prefix.length).split(" ");


    const command = args.shift().toLowerCase();


    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    
    } else if(command == 'insta'){
        client.commands.get('insta').execute(message, args);
    
    } else if(command == 'verify'){
        client.commands.get('verify').execute(message,args);
    
    } else if(command == 'ban'){
        client.commands.get('ban').execute(message, args)
    
    }



})



client.login('Nzk4MzUyODE2MzIxOTg2NTcw.X_zyAA.XPdEAQn_hlcKHwwAOJ4SMW5oSf4');

