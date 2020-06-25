
module.exports = {
  name: "message",
  description: "client message event",
  event: function(client, message) {
    const args = message.content
      .slice(client.prefix.length)
      .trim()
      .split(/ +/g);
    const command = args.shift().toLowerCase();

    if (client.commands.has(command)) {
      let foundCommand = client.commands.get(command);
      //console.log(foundCommand);
      foundCommand.execute(message, args);
    }
  }
};