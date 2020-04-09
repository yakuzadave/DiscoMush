module.exports = {
  name: "element",
  description: "Get a random elemental effect",
  execute(message, args) {
    const d20 = require("d20");
    var dice = args.join();
    const roll = d20.roll("1d4");

    if (roll == 1) {
      message.channel.send(
        `**__Fire__** - Overheated:  Passes out for the next 1 round.`
      );
    }

    if (roll == 2) {
      message.channel.send(
        `**__Water__** - Waterlogged:  Falls prone and suffers -2 to all actions for the next 1 round.`
      );
    }

    if (roll == 3) {
      message.channel.send(
        `**__Earth__** - Sand in the eye:  Partial Blindness for the next 1 round.`
      );
    }

    if (roll == 4) {
      message.channel.send(
        `**__Air__** - Gust of Wind:  Blown back from current location by 10 meters and falls prone.`
      );
    }
  },
  conf: {
    enabled: true,
    guildOnly: false,
    aliases: ["ele"],
    permLevel: "User"
  },
  help: {
    name: "element",
    catagory: "game",
    description: "Use this command to get a random elemental effect.",
    usage: "-element"
  }
};
