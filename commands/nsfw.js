const Discord = require('discord.js');
const akaneko = require('akaneko');

module.exports = {
	name: 'nsfw',
    description: 'Manda uma imagem NSFW.',
    args: true,
	usage: '<termo>',
	async execute(message, args) {
        message.delete().catch(O_o => {});

        const nsfwEmbed = new Discord.MessageEmbed()
            .setColor('#6d00c1')
            .setImage(await akaneko.nsfw[args[0]]());

        return message.channel.send(nsfwEmbed);
    },
};
