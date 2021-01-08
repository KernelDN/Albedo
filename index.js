const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
require('dotenv').config();

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();

client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity('A!help  /  A!info', { type: 'STREAMING', url: 'https://www.twitch.tv/natalo18' });
});

client.on('message', message => {
	if (!message.content.toUpperCase().startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type === 'dm') {
        return message.author.send(`\n⭕️ Eu não posso executar este comando em **DMs**!`)
        .then(message => { message.delete({ timeout: 5000 })}).catch(O_o => {});
	}

	if (command.permissions) {
		const authorPerms = message.channel.permissionsFor(message.author);
		if (!authorPerms || !authorPerms.has(command.permissions)) {
            message.delete().catch(O_o => {});
            return message.reply(`\n❌ Você não possui **permissão** para fazer isso!`)
            .then(message => { message.delete({ timeout: 5000 })}).catch(O_o => {});
		}
	}

	if (command.args && !args.length) {
        message.delete().catch(O_o => {});
		let reply = `\n⭕️ Nenhum argumento foi declarado! `;

		if (command.usage) {
			reply += `O uso correto seria: \`${prefix}${command.name} ${command.usage}\``;
		}

        return message.reply(reply)
        .then(message => { message.delete({ timeout: 5000 })}).catch(O_o => {});
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`Por favor aguarde mais ${timeLeft.toFixed(1)} segundo(s) antes de utilizar novamente o comando \`${command.name}\`.`);
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(message, args);
	} catch (error) {
        console.error(error);
        message.delete().catch(O_o => {});
        message.reply(`\n⚠️ Ocorreu um **erro** ao executar este comando!`)
        .then(message => { message.delete({ timeout: 5000 })}).catch(O_o => {});
	}
});

client.login();