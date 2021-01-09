const Discord = require('discord.js');

module.exports = {
	name: 'help',
    description: 'Lista todos os comandos do bot.',
    aliases: ['h','commands'],
	execute(message, args) {
        message.delete().catch(O_o => {});

        const helpEmbed = new Discord.MessageEmbed()
            .setThumbnail(`${message.client.user.displayAvatarURL()}`)
            .setColor('#6d00c1')
            .setTitle('Comandos Disponíveis')
            .setDescription('Utilize o prefixo ` A! ` seguido por um dos comandos abaixo:')
            .addFields(
                { name: '⚖️  Moderação', value: 'ban\nunban\nkick\nclear', inline: true },
                { name: '⚙️  Cargos', value: 'addrole\nremoverole\nmute\nunmute', inline: true },
                { name: '🎨  Diversos', value: 'avatar\ninfo\nsay', inline: true },
                { name: '\u200B', value: '\u200B' },
            )
            
        const helpEmbed2 = new Discord.MessageEmbed()
            .setThumbnail(`${message.client.user.displayAvatarURL()}`)
            .setColor('#6d00c1')
            .setTitle('Comandos NSFW')
            .setDescription('Utilize o comando ` A!nsfw ` seguido por um dos termos abaixo:')
            .addFields(
                { name: '\u200B', value: 'ass\nbdsm\nblowjob\ncum\ndoujin\nfeet\nfemdom\nfoxgirl', inline: true },
                { name: '\u200B', value: 'gifs\nglasses\nhentai\nnetorare\nloli\nmaid\nmasturbation\norgy', inline: true },
                { name: '\u200B', value: 'panties\npussy\nschool\ntentacles\nthighs\nuglyBastard\nuniform\nyuri\nzettaiRyouiki', inline: true },
                { name: '\u200B', value: '\u200B' },
            )
		
        message.author.send(helpEmbed);
        message.author.send(helpEmbed2);
	},
};