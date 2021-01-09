const Discord = require('discord.js');
const Danbooru = require('danbooru')

module.exports = {
	name: 'danbooru',
    description: 'Manda uma imagem NSFW do Danbooru.',
	execute(message, args) {
        message.delete().catch(O_o => {});

        const booru = new Danbooru()
        booru.posts({ tags: `rating:explicit order:rank`, limit: 40, page: 3}).then(posts => {
            const index = Math.floor(Math.random() * posts.length)
            const post = posts[index]
            const url = booru.url(post.file_url)
            console.log(posts.length)
            
            const nsfwEmbed = new Discord.MessageEmbed()
                .setColor('#6d00c1')
                .setImage(url.href);

            return message.channel.send(nsfwEmbed);
        })
    },
};