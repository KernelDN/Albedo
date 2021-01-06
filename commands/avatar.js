module.exports = {
	name: 'avatar',
    description: 'Retorna o avatar de um usuário.',
    aliases: 'a',
    usage: '<usuário>',
	execute(message) {
        message.delete().catch(O_o => {});
        
		if (!message.mentions.users.size) {
			return message.channel.send(`Seu avatar: <${message.author.displayAvatarURL({ dynamic: true })}>`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `Avatar de ${user.username}: <${user.displayAvatarURL({ dynamic: true })}>`;
		});

		message.channel.send(avatarList);
	},
};