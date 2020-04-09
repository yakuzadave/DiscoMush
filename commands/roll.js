module.exports = {
    name: 'roll',
    description: 'Roll some dice.',
    execute(message, args) {
        const d20 = require("d20");
        var dice = args.join();
        const roll = d20.roll(dice);
        const vroll = d20.roll(dice, true);
        message.channel.send(`You rolled a ${roll}`)
    },
    conf: {
        enabled: true,
        guildOnly: false,
        aliases: ["r"],
        permLevel: "User"
    },
    help: {
        name: "element",
        catagory: "game",
        description: "Use this command to roll some dice",
        usage: "-roll [diceNum]"
    }
};