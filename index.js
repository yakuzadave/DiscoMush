require('dotenv').config()
const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const fs = require("fs-extra");
const axios = require("axios");

if (Number(process.version.slice(1).split(".")[0]) < 8)
    throw new Error(
        "Node 8.0.0 or higher is required. Update Node on your system."
    );

//Load lowdb and set defaults
const Filesync = require("lowdb/adapters/FileSync");
const adapter = new Filesync("db.json");
const low = require("lowdb");
const db = low(adapter);
const Discord = require("discord.js");
const client = new Discord.Client();
require("./modules/functions.js")(client);
client.config = require("./config.js");
client.logger = require("./modules/Logger");
let modules = fs.readdirSync('/Users/dcarmoca/Documents/Programming/Node/mudTester/DiscoMush/DiscoMush/modules')
console.log(modules)




client.on("ready", () => {
    console.log("Client has been loaded successfully.")
})

client.login(process.env.TOKEN)





app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());

// Root entry
app.get("/", function (request, response) {
    response.send("Live");
});

var listener = app.listen(process.env.PORT, function () {
    console.log(`Your app is listening on port ${listener.address().port}`);
});

module.exports.client = client;
module.exports.db = db;