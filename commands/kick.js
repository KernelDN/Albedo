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
	},
};