module.exports = {
	name: 'args',
	description: 'Information about the arguments provided.',
	execute(message, args) {
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		} else if (args[0] === 'foo') {
			return message.channel.send('bar');
		} else{
      args.forEach(async function(arg){
            const { client } = require('../index.js')
            await client.wait(1000)
        await message.channel.send(`${arg}`)
        
      })
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