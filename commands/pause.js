const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "pause",
    description: "To pause the current music in the server",
    usage: "[pause]",
    aliases: ["pause"],
  },

  run: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
	    try{
      serverQueue.connection.dispatcher.pause()
	  } catch (error) {
        message.client.queue.delete(message.guild.id);
        return message.reply(`:notes: The player has stopped and the queue has been cleared.: ${error}`);
      }	    
      let xd = new MessageEmbed()
      .setDescription("⏸ Paused the music for you!")
      .setColor("RANDOM")
      .setTitle("Music has been paused!")
      return message.channel.send(xd);
    }
    return message.reply("There is nothing playing in this server.");
  },
};