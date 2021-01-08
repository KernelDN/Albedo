module.exports = {
	name: 'ban',
    description: 'Bane um usuário!',
    guildOnly: true,
    permissions: 'BAN_MEMBERS',
	args: true,
	usage: '<usuário>',
	execute(message, args) {
        message.delete().catch(O_o => {});
        
        const user = message.mentions.users.first();
        guild.members.ban(user);
        message.reply(`\n✅ Usuário **banido** com sucesso!`)
        .then(message => { message.delete({ timeout: 5000 })}).catch(O_o => {});
	},
};