module.exports = {
  name: "mention",
  description: "client mention event",
  event: function(client, message) {
    const args = message.content
      .slice(client.prefix.length)
      .trim()
      .split(/ +/g);
    const command = args.shift().toLowerCase();
    console.log(message)
  }
};
