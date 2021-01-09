const Discord = require('discord.js');

module.exports = {
	name: 'info',
    description: 'Mostra informações sobre o bot.',
    aliases: 'bio',
	execute(message, args) {
        message.delete().catch(O_o => {});

        const infoEmbed = new Discord.MessageEmbed()
            .setThumbnail(`${message.client.user.displayAvatarURL()}`)
            .setColor('#6d00c1')
            .setTitle('Painel de Informações')
            .setDescription('Obrigada por usar a Albedo em seu servidor!\n\n**Prefixo:** ` A! `\n**Ajuda?** ` A!help `\n**Criador:** ` Natalo18#7032 `\n\n[Albedo Dev Server](https://discord.gg/HjkrcK6znK) | [Website](https://github.com)')
		
		message.channel.send(infoEmbed);
    },
};