const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('CodeEyes is online and ready to rumble!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command === 'link'){
        client.commands.get('link').execute(message, args);
    } else if (command === 'embed'){
        client.commands.get('embed').execute(message, args, Discord);
    } else if (command === 'clear'){
        client.commands.get('clear').execute(message, args);
    } else if (command === 'kick'){
        client.commands.get('kick').execute(message, args);
    } else if (command === 'ban'){
        client.commands.get('ban').execute(message, args);
    } else if (command === 'kikker'){
        client.commands.get('kikker').execute(message, args);
    }
});

client.login('#');

/*Client login has to be specified, Discord/Bot code has to be inserted between the brackets*/
/*This gives the bot his life. The commands that you see are commands that are already registered and tested, since I already started my development a week ago*/