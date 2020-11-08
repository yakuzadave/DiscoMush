const fs = require("fs-extra")
const low = require("lowdb")
const FileSync = require("lowdb/adapters/FileSync")
const adapter = new FileSync("db.json")
const db = low(adapter)

let players = db.get("players").map(obj =>obj.name).uniq().value()

let playerIDs = db.get('players').




console.log(players);
//db.set("players", players).write();
