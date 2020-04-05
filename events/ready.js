const { client, db } = require('../index.js')

module.exports = {
    name: "ready",
    description: "Event emitted when Discord client is ready",
    event: function(client,message){
        client.logger.log("Client is ready")
    }

}