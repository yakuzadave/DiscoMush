module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message, args) {
		message.channel.send('Pong.');
    },
    conf: {
        enabled: true,
        guildOnly: false,
        aliases: ["p"],
        permLevel: "Administrator"
    },
    help: {
        name: "ping",
        catagory: "system",
        description: "Ping!",
        usage: "-ping"
    }
};

