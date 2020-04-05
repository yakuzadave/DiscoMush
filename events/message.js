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



        if(command == "test"){
            client.logger.log(command)
            message.channel.send("Test sent")


        }

        

    }
};