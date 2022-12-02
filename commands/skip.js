const { Util, MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "skip",
    description: "To skip the current music",
    usage: "",
    aliases: ["s"],
  },

  run: async function (client, message, args) {
 const channel = client.channels.cache.get("1043083954217033769");
        if (!channel) return sendError("I'm sorry but you need to be in <#1043083954217033769> to play music!", message.channel);

    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue)return message.reply("There is nothing playing that I could skip for you.");
        if(!serverQueue.connection)return
if(!serverQueue.connection.dispatcher)return
     if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      let xd = new MessageEmbed()
      .setDescription("▶ Resumed the music for you!")
      .setColor("RANDOM")
      .setTitle("Music has been Resumed!")
       
   return message.channel.send(xd).catch(err => console.log(err));
      
    }


       try{
      serverQueue.connection.dispatcher.end()
      } catch (error) {
        serverQueue.voiceChannel.leave()
        message.client.queue.delete(message.guild.id);
        return message.reply(`:notes: The player has stopped and the queue has been cleared.: ${error}`);
      }
    message.react("✅")
  },
};
