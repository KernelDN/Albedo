const Discord = require('discord.js');

module.exports = {
    name: 'coin',
    description: 'Toss Coin!',
    aliases: 'toss',
    execute(message, args) {
        message.delete().catch(O_o => {});

        const embed = new Discord.MessageEmbed()

        .setTitle(`${message.author.username}`)
        .setColor('#6d00c1')
        .setImage('https://i.pinimg.com/originals/8f/06/04/8f0604aedc34d33d2f41113c312a588d.gif');
        
        message.channel.send(embed)
        .then(message => { 
            message.delete({ timeout: 4000 })
        })
        .catch(O_o => {});

        message.channel.send('Send me after timeout');

    },
};