const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
    info: {
        name: "join",
        aliases: ["come", "connect", "hey"],
        description: "Join The Voice Channel!",
        usage: "Join",
    },

    run: async function (client, message, args) {
     const channel = client.channels.cache.get("1043083954217033769");
        if (!channel) return sendError("I'm sorry but you need to be in <#1043083954217033769> to play music!", message.channel);

        try {
            const connection = await channel.join();
            queueConstruct.connection = connection;
            play(queueConstruct.songs[0]);
        } catch (error) {
            console.error(`I could not join the voice channel: ${error}`);
        }

        const Embed = new MessageEmbed()
            .setAuthor("Joined Voice Channel")
            .setColor("#fffdd0")
            .setTitle("Success")
            .setDescription("🎶 Joined The Voice Channel.")
            .setTimestamp();

        return message.channel.send(Embed).catch(() => message.channel.send("🎶 Joined The Voice Channel :C"));
    },
};
