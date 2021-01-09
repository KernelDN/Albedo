const fs = require('fs');
const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client();

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

for (const file2 of eventFiles) {
    const event = require(`./events/${file2}`);
    client.events.set(event.name, event);
}

client.on('ready', () => {
    const event = client.events.get("ready");
    event.run(client);
});

client.on('message', message => {
    const event = client.events.get('message');
    event.run(client, message);
});

client.login(process.env.token);