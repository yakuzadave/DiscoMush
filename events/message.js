module.exports = {
  name: "message",
  description: "client message event",
  event: function(client, message) {
    const args = message.content
      .slice(client.prefix.length)
      .trim()
      .split(/ +/g);
    const command = args.shift().toLowerCase();
    console.log(`${message.author.username}(${message.author.id}):  ${message.content}`)
    let players = client.db.get('players').value()
    let obj = {}
    obj.name = message.author.username
    obj.id = message.author.id
    players.push(obj)
    let setPlayers = [...new Set(players)]
    client.db.set('players',setPlayers).write()
    

    if (client.commands.has(command)) {
      let foundCommand = client.commands.get(command);
      //console.log(foundCommand);
      foundCommand.execute(message, args);
    }
  }
};
