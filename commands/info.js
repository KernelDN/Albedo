const Discord = require('discord.js');

module.exports = {
	name: 'info',
    description: 'Mostra informações sobre o bot.',
    aliases: 'bio',
	execute(message, args) {
        message.delete().catch(O_o => {});

        const infoEmbed = new Discord.MessageEmbed()
            .setAuthor('Albedo', `${message.client.user.displayAvatarURL()}`)
            .setThumbnail(`${message.client.user.displayAvatarURL()}`)
            .setColor('#6d00c1')
            .setTitle('Olá, eu me chamo Albedo!')
            .addFields(
                { name: '\u200B', value: '\u200B' },
                { name: 'Criador:', value: 'Natalo18#7032' },
                { name: 'Prefixo:', value: 'A! ou a!' },
                { name: 'Precisa de ajuda?', value: 'help' },
                { name: '\u200B', value: '\u200B' },
            )
            .setTimestamp()
	        .setFooter(`Requisitado por ${message.author.username}`, `${message.author.displayAvatarURL()}`);
		
		message.channel.send(infoEmbed);
    },
};