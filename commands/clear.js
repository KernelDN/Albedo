module.exports = {
	name: 'clear',
    description: 'Exclui mensagens.',
    guildOnly: true,
    permissions: 'MANAGE_MESSAGES',
    aliases: ['purge', 'cls'],
    args: true,
	usage: '<número (0-99)>',
	execute(message, args) {
        message.delete().catch(O_o => {});

        if(parseInt(args[0]) >= 1 && parseInt(args[0]) <= 99) {
            message.channel.bulkDelete(parseInt(args[0]));
            message.reply(`\n✅ **${args[0]}** mensagens excluídas com sucesso!`)
            .then(message => { message.delete({ timeout: 5000 })}).catch(O_o => {});
        }
        else {
            message.reply(`\n⭕️ Por favor digite um número de **1** a **99**!`)
            .then(message => { message.delete({ timeout: 5000 })}).catch(O_o => {});
        }
    },
};