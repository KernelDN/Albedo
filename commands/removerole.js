module.exports = {
	name: 'removerole',
    description: 'Remove um cargo de um usuário.',
    guildOnly: true,
    permissions: 'MANAGE_ROLES',
    aliases: ['rr','rrole'],
    args: true,
	usage: '<role> <usuário>',
	execute(message, args) {
        message.delete().catch(O_o => {});

        const role = message.mentions.roles.first();
        const member = message.mentions.members.first();
        member.roles.remove(role);
    },
};