// const Discord = require('discord.js');

// module.exports = {
//     name: 'coin',
//     description: 'Toss Coin!',
//     aliases: 'toss',
//     args: true,
//     usage: '<cara> ou <coroa>',
//     execute(message, args) {
//         message.delete().catch(O_o => {});

//         let coin = Math.ceil(Math.random());
//         let opcoes = ['cara', 'coroa'];

//         if(args[0].toLowerCase() === 'cara' || args[0].toLowerCase() === 'coroa'){
//             const embed = new Discord.MessageEmbed()

//             .setTitle(`${message.author.username}`)
//             .setColor('#6d00c1')
//             .setImage('https://i.pinimg.com/originals/8f/06/04/8f0604aedc34d33d2f41113c312a588d.gif');
            
//             message.channel.send(embed)
//                 .then(message => 
//                     message.delete({ timeout: 4000 })
//                         .then(m =>
//                             if(args[0] === opcoes[coin]) {
//                                 m.channel.send("ganhou")
//                             }
//                             m.channel.send("Send me after timeout")
//                         )
//                 )
//                 .catch(err => {
//                     console.log(err);
//                 });
//         }
//         else {
//             message.reply('\nO argumento deve ser **Cara** ou **Coroa**');
//         }
//     },
// };