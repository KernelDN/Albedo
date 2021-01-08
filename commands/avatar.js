const Discord = require('discord.js');

module.exports = {
	name: 'avatar',
    description: 'Retorna o avatar de um usuário.',
	execute(message) {
        message.delete().catch(O_o => {});
        
        const user = message.mentions.users.first() || message.author;
        
        const avatarEmbed = new Discord.MessageEmbed()
            .setColor('#6d00c1')
            .setTitle(`🇧🇷 Avatar de: ${user.username}`)
            .setImage(user.displayAvatarURL());

        message.channel.send(avatarEmbed);
	},
};