module.exports = {
	name: 'clear',
    description: 'Exclui mensagens.',
    guildOnly: true,
    permissions: 'MANAGE_MESSAGES',
    aliases: 'cls',
    args: true,
	usage: '<número (0-99)>',
	execute(message, args) {
        message.delete().catch(O_o => {});

        if(parseInt(args[0]) >= 1 && parseInt(args[0]) <= 99) {
            message.channel.bulkDelete(parseInt(args[0]));
        }
        else {
            message.channel.send('Por favor digite um número de 1 a 99!')
        }
    },
};