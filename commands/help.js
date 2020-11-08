module.exports = {
	name: 'help',
	description: 'Gives help for commands',
	execute(message, args) {
    const { client, db } = require("../index.js");
		if (!args.length) {
      let commands = client.db.get('commands').value()
      let fields = []
      let commandMap = commands.map(command =>{
        //console.log(command)
        let help = command.help
        let conf = command.conf
        let obj = {}
        obj.value = `name: ${command.name}\ncatagory: ${help.catagory}\nusage: ${help.usage}\nenabled: ${conf.enabled}`
        obj.name = command.name
        obj.inline = false
        return obj
      })
      //console.log(commandMap)
      let obj = {}
      obj.embed = {}
      let embed = obj.embed
      embed.title = "Command Help List"
      embed.description = "Command Help List"
      embed.fields = commandMap
      console.log(obj)
      message.channel.send(obj)
      

        

      
      
    }
    
	},
	conf: {
        enabled: true,
        guildOnly: false,
        aliases: ["args","arg"],
        permLevel: "User"
    },
    help: {
        name: "help",
        catagory: "system",
        description: "Help for commands",
        usage: "-help"
    }
};