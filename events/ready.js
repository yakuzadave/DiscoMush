const { client, db } = require('../index.js')

module.exports = {
    name: "ready",
    description: "Event emitted when Discord client is ready",
    event: function(client,message){
      client.logger.log("Client is ready")
      client.db.set('roles', []).write()
      client.db.set('channels', []).write()
      client.db.set('members', []).write()
      client.guilds.cache.each(g => {
        
        //console.log(g)
        let roles = g.roles.cache
        let channels = g.channels.cache
        let {db} = require('../index.js')
        let roleArray = []
        let memberArray = []
        let channelArray = []
        roles.each(r => roleArray.push(r))
        channels.each(r => channelArray.push(r))
        let roleMap = roleArray.map(o => {
          let obj = {}
          //console.log(o)
          obj.name = o.name
          obj.id = o.id
          obj.memberCount = o.memberCount
          return obj
        })
        let channelMap = channelArray.map(o => {
          let obj = {}
          //console.log(o)
          obj.name = o.name
          obj.id = o.id
          obj.type = o.type
          obj.memberCouny = o.memberCount
          return obj
          
        })
        db.get('roles').push(roleMap).write()
        db.get('channels').push(channelMap).write()
        
        
      })
      let flatRoles = client.db.get('roles').flattenDeep().value()
      client.db.set('roles',flatRoles).write()
      let flatChannels = client.db.get('channels').flattenDeep().value()
      client.db.set('channels',flatChannels).write()
      
    }

}