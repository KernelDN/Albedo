const {prefix} = require('../config.json');

module.exports = {
    name: 'message',
    once: false,

    run(client, message) {
        if (!message.content.toUpperCase().startsWith(prefix) || message.author.bot) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        const command = client.commands.get(commandName)
            || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

        if (!command) return;

        if (command.guildOnly && message.channel.type === 'dm') {
            return message.author.send('\n⭕️ Eu não posso executar este comando em **DMs**!')
            .then(message => { message.delete({ timeout: 5000 })}).catch(O_o => {});
        }

        if (command.permissions) {
            const authorPerms = message.channel.permissionsFor(message.author);
            if (!authorPerms || !authorPerms.has(command.permissions)) {
                message.delete().catch(O_o => {});
                return message.reply('\n❌ Você não possui **permissão** para fazer isso!')
                .then(message => { message.delete({ timeout: 5000 })}).catch(O_o => {});
            }
        }

        if (command.args && !args.length) {
            message.delete().catch(O_o => {});
            let reply = '\n⭕️ Nenhum argumento foi declarado! ';

            if (command.usage) {
                reply += `O uso correto seria: \`${prefix}${command.name} ${command.usage}\``;
            }

            return message.reply(reply)
            .then(message => { message.delete({ timeout: 5000 })}).catch(O_o => {});
        }

        try {
            command.execute(message, args);
        } catch (error) {
            console.error(error);
            message.delete().catch(O_o => {});
            message.reply('\n⚠️ Ocorreu um **erro** ao executar este comando!')
            .then(message => { message.delete({ timeout: 5000 })}).catch(O_o => {});
        }
    }
};