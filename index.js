const { Discord, Client, Intents, MessageButton, MessageActionRow } = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const hash = require('./sample.js');

client.on('ready', () => {
    console.log(`${client.user.tag} でログインしています。`)
})

client.on('messageCreate', async message => {
    if (message.content.startsWith("!button")) {
        const tic1 = new MessageButton()
            .setCustomId("contact")
            .setStyle("PRIMARY")
            .setLabel("🎫問い合わせ🎫")
        await message.channel.send({
            content: "お問い合わせはこちらから",
            components: [new MessageActionRow().addComponents(tic1)]
        });
    } else if (message.content.startsWith('!ping')) {
        message.channel.send('Pong!');
    } else if (message.content.startsWith('!github')){
        message.channel.send('https://github.com/Cosmic-rare');
    } else {
        if(message.author.bot)　return;
        message.channel.send('その他');
    }
});

client.on('interactionCreate', async (interaction) => {
    if (interaction.customId === "contact") {
        data = hash(interaction.user.id);
        await interaction.reply({
            content: `http://localhost:5000/${interaction.user.id}/${data}`,
            ephemeral: false
        });
    }
});

require('dotenv').config();

client.login(process.env.TOKEN)