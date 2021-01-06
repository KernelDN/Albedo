module.exports = {
	name: 'say',
	description: 'Say!',
	args: true,
	usage: '<mensagem>',
	execute(message, args) {
        message.delete().catch(O_o => {});
        
        message.channel.send(args);
	},
};