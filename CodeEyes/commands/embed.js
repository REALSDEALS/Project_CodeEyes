module.exports = {
    name: 'embed',
    description: "Embeds! Our shortrules embed.",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281') /* <--- You can set you color here*/
        .setTitle('Test') /* <--- You can set a title here*/
        .setURL('https://www.discord.com/') /* <--- You can add a link to the message*/
        .setDescription('This embeds gives out an embedded message, so it looks nice and slick.')
        .addFields(
            {name: 'Regel 1', value: 'Enter what you want on rule 1'},
            {name: 'Regel 2', value: 'Here you can enter something you would like to'}
            /*You can add more rules, by following the same line of code that you can see above this text*/
        )
        .setImage('Here you can enter an HTTPS link, to show a image on the message')
        .setFooter('Here you can set an footer text, the end of the message in smaller text');

        message.channel.send(newEmbed);
    }
}