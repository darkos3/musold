const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "resume",
    description: "To resume the paused music",
    usage: "",
    aliases: [],
  },

  run: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      let xd = new MessageEmbed()
      .setDescription("▶ Resumed the music for you!")
      .setColor("RANDOM")
      .setAuthor("Music has been Resumed!")
      return message.channel.send(xd);
    }
    return message.reply("There is nothing playing in this server.");
  },
};
