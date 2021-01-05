module.exports = {
	name: 'say',
	description: 'Say!',
	execute(message, args) {
        message.delete().catch(O_o => {});
        message.channel.send(args);
	},
};