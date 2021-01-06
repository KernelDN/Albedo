module.exports = {
	name: 'addrole',
    description: 'Adiciona um cargo a um usuário.',
    guildOnly: true,
    permissions: 'MANAGE_ROLES',
    aliases: ['ar','arole'],
    args: true,
	usage: '<role> <usuário>',
	execute(message, args) {
        message.delete().catch(O_o => {});

        const role = message.mentions.roles.first();
        const member = message.mentions.members.first();
        member.roles.add(role);
    },
};