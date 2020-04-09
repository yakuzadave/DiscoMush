module.exports = {
    name: 'weave',
    description: 'weave dice',
    execute(message, args) {
        const {
            db
        } = require('../index.js')
        const d20 = require('d20')
        const face = ["X", "Fire", "Gale", "Stone", "Brook", "Weave"]

        if (args[0]) {
            var diceNum = args[0]
            var x = 0
            //var roll = d20.roll(`${diceNum}d6`)
            while (x < diceNum) {
                var roll = d20.roll("1d6")
                var result = face[roll - 1]
                setInterval(function () {
                }, 10000);
                message.channel.send(`You rolled a ${result}`)
                x++
            }
        } else {
            message.channel.send(`specify how many dice to roll`)
        }
    },
    conf: {
        enabled: true,
        guildOnly: false,
        aliases: ["w"],
        permLevel: "User"
    },
    help: {
        name: "weave",
        catagory: "game",
        description: "Use this command to roll some weave dice!",
        usage: "-weave [diceNum]"
    }
};