const { client, db } = require("../index.js");
module.exports = {
  name: "role",
  description: "assign a role to a member of the server.",
  execute(message, args) {
    if (!args.length) {
      return message.channel.send(
        `You didn't provide any arguments, ${message.author}!`
      );
    } else if (args[0] !== null) {
      try {
        let { client } = require("../index.js");
        //console.log(message.mentions.members.first())
        let member = message.mentions.members.first();
        //console.log(member)
        let role = member.guild.roles.cache.find(role => role.name == args[0]);
        if (member.roles.cache.some(role => role.name === args[0])) {
          message.channel.send(`${args[1]} is already member of ${role.name}`);
          return;
        }
        if (args[0] == "Admin" && message.author.id != 155159981925203969) {
          message.channel.send(
            "This permission set can only be added by Dave."
          );
          return;
        }

        message.channel.send(`Adding ${args[1]} to ${args[0]}`);

        member.roles.add(role);
        if (member.roles.cache.some(role => role.name === args[0])) {
          message.channel.send(`${args[1]} is now a member of ${role.name}`);
          return;
        }

        //message.channel.send("Added requested role to the user.")
      } catch (e) {
        message.channel.send(`${e}`);
      }
    }
  },
  conf: {
    enabled: true,
    guildOnly: true,
    aliases: ["role"],
    permLevel: "User"
  },
  help: {
    name: "role",
    catagory: "system",
    description: "Add role to member of the server",
    usage: "-role <role> <member>"
  }
};
