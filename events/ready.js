module.exports = {
    name: 'ready',
    once: true,

    run(client) {
        console.log('Ready!');
        client.user.setActivity('A!help  /  A!info', { type: 'STREAMING', url: 'https://www.twitch.tv/natalo18' });
    }
};