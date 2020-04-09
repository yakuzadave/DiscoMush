require("dotenv").config();
const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const fs = require("fs-extra");
const axios = require("axios");

//check Node version
if (Number(process.version.slice(1).split(".")[0]) < 8)
  throw new Error(
    "Node 8.0.0 or higher is required. Update Node on your system."
  );

//Load lowdb and set defaults
const Filesync = require("lowdb/adapters/FileSync");
const adapter = new Filesync("db.json");
const low = require("lowdb");
const db = low(adapter);
db.defaults({ commands: [], events: [],skills: {}, players: [], mobs: [], objects: {}, weapons: {}, armor: {}, ships: {}, resources: {}, time: 0, locations: {}, count: 0 }).write()

// create the Discord client
const Discord = require("discord.js");
const client = new Discord.Client();
require("./modules/functions.js")(client);
client.config = require("./config.js");
client.prefix = "-";
client.logger = require("./modules/Logger");
let modules = fs.readdirSync("./modules");
console.log("Loaded:", modules);
client.events = new Discord.Collection();
const eventFiles = fs
  .readdirSync("./events")
  .filter(file => file.endsWith(".js"));
for (const file of eventFiles) {
  const clientEvent = require(`./events/${file}`);
  console.log(clientEvent);
  try {
    client.on(clientEvent.name, clientEvent.event.bind(null, client));
    console.log(`Event loaded ${clientEvent.name}`);
  } catch (error) {
    console.log(`${file} failed to load`);
  }
}

db.set('commands', '[]')
db.write()

client.commands = new Discord.Collection();
const commandFiles = fs
  .readdirSync("./commands")
  .filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  try {
    client.commands.set(command.name, command);
    //console.log(`${command.name} loaded`);
    db.get('commands')
    .push(command)
    .write()
  } catch (error) {
    console.log(`${command.name} failed to load`);
  }
}

let dbCommands = db.get('commands').value()
console.log(dbCommands)

//load the token from .env file
client.login(process.env.TOKEN);

//add in body-parser
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

// Root entry
app.get("/", function(request, response) {
  response.send("Live");
});
//add listener
var listener = app.listen(process.env.PORT, function() {
  console.log(`Your app is listening on port ${listener.address().port}`);
});


// export the client and the db
module.exports.client = client;
module.exports.db = db;
