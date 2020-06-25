module.exports = {
  name: "char",
  description: "Command to manage your character.!",
  execute(message, args) {
    // changing this around beecause it was looking like the other method was not working.

    async function waitMessage(msg, question, limit = 60000) {
      const { client } = require("../modules/functions.js");
      const filter = msg => msg.author.id == message.author.id;
      await msg.channel.send(question);
      try {
        const collected = await msg.channel.awaitMessages(filter, {
          max: 1,
          time: limit,
          errors: ["time"]
        });
        return collected.first().content;
      } catch (e) {
        return false;
      }
    }

    // To add a new character to the db

    if (args[0].toLowerCase() == "new") {
      let question1 = "What character would you like to add?";
      const response = waitMessage(message, question1);
      response.then(function(m) {
        const { db } = require("../index.js");
        let players = db.get("players");
        let check = players.find({ name: `${m}` }).value();
        if (check == m) {
          message.reply(
            "Looks like you aready have an entry for this player in the database."
          );
        } else {
          players.push({ name: `${m}` }).write();
          message.reply(`I have gone ahead and added ${m} to the database`);
        }
      });
    }
  },
  conf: {
    enabled: true,
    guildOnly: false,
    aliases: ["char"],
    permLevel: "User"
  },
  help: {
    name: "char",
    catagory: "game",
    description: "Commands for managing characters!",
    usage: "-char new : Used to create a new character."
  }
};
