const { client } = require('../index.js');
const axios = require('axios');

module.exports = {
	name: 'xkcd',
	description: 'Looks up a xkcd comic and sends it to the channel.',
	execute(message, args) {
        const host = "http://xkcd.com/"
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		} else if ((args[0]).toLowerCase() === 'latest') {
            let url = host + '/info.0.json'
            let response = axios.get(url)
            console.log(response)
    



		} else{
            let comic = args[0]
            try {
                parseInt(comic)
                
                
            } catch (error) {
                let title = true
                console.log('Passed arg is a title.')
                
            }
    }
	},
	conf: {
        enabled: true,
        guildOnly: false,
        aliases: ["args","arg"],
        permLevel: "User"
    },
    help: {
        name: "args",
        catagory: "system",
        description: "Command used for testing args",
        usage: "-args <arg1> <arg2> <arg3>"
    }
};