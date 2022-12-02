const { MessageEmbed } = require('discord.js')

module.exports = {
  info: {
    name: "help",
    description: "To show all commands",
    usage: "[command]",
    aliases: ["commands", "help me", "pls help", "h"]
  },

  run: async function(client, message, args) {
    var allcmds = "";

    client.commands.forEach(cmd => {
      let cmdinfo = cmd.info
      allcmds += "`" + client.config.prefix + cmdinfo.name + " " + cmdinfo.usage + "` ~ " + cmdinfo.description + "\n"
    })

    let embed = new MessageEmbed()
      .setAuthor(`Help Commands :`)
      .setColor("RANDOM")
      .setDescription(allcmds)
    if (!args[0]) return message.channel.send(embed)
      }
  }
