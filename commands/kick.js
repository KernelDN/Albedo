module.exports = {
	name: 'kick',
    description: 'Kicka um usuário!',
    guildOnly: true,
    permissions: 'KICK_MEMBERS',
	args: true,
	usage: '<usuário>',
	execute(message, args) {
        message.delete().catch(O_o => {});
        
        const member = message.mentions.members.first();
        member.kick();
        message.reply(`\n✅ Usuário **kickado** com sucesso!`)
        .then(message => { message.delete({ timeout: 5000 })}).catch(O_o => {});
	},
};