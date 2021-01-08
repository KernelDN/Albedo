module.exports = {
	name: 'unban',
    description: 'Desbane um usuário!',
    guildOnly: true,
    permissions: 'BAN_MEMBERS',
	args: true,
	usage: '<id do usuário>',
	execute(message, args) {
        message.delete().catch(O_o => {});
        
        const id = args[0];
        guild.members.unban(id);
        message.reply(`\n✅ Usuário **desbanido** com sucesso!`)
        .then(message => { message.delete({ timeout: 5000 })}).catch(O_o => {});
	},
};