const Discord = require('discord.js');

module.exports = {
	name: 'help',
    description: 'Lista todos os comandos do bot.',
    aliases: ['h','commands'],
	execute(message, args) {
        message.delete().catch(O_o => {});

        const helpEmbed = new Discord.MessageEmbed()
            .setAuthor('Albedo', `${message.client.user.displayAvatarURL()}`)
            .setThumbnail(`${message.client.user.displayAvatarURL()}`)
            .setColor('#6d00c1')
            .setTitle('Aqui está a lista de todos os meus comandos!\nprefixo: A! ou a!')
            .addFields(
                { name: '⚖️  Moderação', value: 'ban\nunban\nkick\naddrole\nremoverole\nclear', inline: true },
                { name: '🥳  Diversão', value: 'avatar\nsay\ncoin\ndado\n8ball\nkiss', inline: true },
                { name: '🎵  Música', value: 'play\npause\nskip\nqueue', inline: true },
                { name: '\u200B', value: '\u200B' },
            )
            .setTimestamp()
	        .setFooter(`Requisitado por ${message.author.username}`, `${message.author.displayAvatarURL()}`);
		
		message.author.send(helpEmbed);
	},
};