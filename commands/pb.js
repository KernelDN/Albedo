const Discord = require('discord.js');

module.exports = {
    name: 'pb',
    description: 'Peaky Blinders!',
    execute(message, args) {
        message.delete().catch(O_o => {});

        const embed = new Discord.MessageEmbed()

        .setTitle('Por ordem dos Peaky Blinders!')
        .setColor('#6d00c1')
        .setImage('https://media.giphy.com/media/NFbjUcDsjUUms/source.gif');
        
        message.channel.send(embed);
    },
};