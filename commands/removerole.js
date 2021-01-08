module.exports = {
	name: 'removerole',
    description: 'Remove um cargo de um usuário.',
    guildOnly: true,
    permissions: 'MANAGE_ROLES',
    aliases: ['rr', 'remover', 'rrole'],
    args: true,
	usage: '<role> <usuário>',
	execute(message, args) {
        message.delete().catch(O_o => {});

        const role = message.mentions.roles.first();
        const member = message.mentions.members.first();

        if (!member.roles.cache.find(role2 => role2.name === role.name)) {
            message.reply(`\n⭕️ ${member} **não possuí** o cargo de ${role}!`)
            .then(message => { message.delete({ timeout: 5000 })}).catch(O_o => {});
        }
        else {
            member.roles.remove(role);
            message.reply(`\n✅ ${member} teve o cargo de ${role} **removido** com sucesso!`)
            .then(message => { message.delete({ timeout: 5000 })}).catch(O_o => {});
        }
    },
};