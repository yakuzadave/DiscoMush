const { client, db } = require('../index.js');

module.exports = {
	name: 'message',
    description: 'client message event',
    event: function(client, message){

        

        const args = message.content
        .slice(client.prefix.length)
        .trim()
        .split(/ +/g);
        const command = args.shift().toLowerCase();



        if(command == "ping"){
            client.logger.log(command)
            client.commands.get('ping').execute(message, args)


        }



    }
};