module.exports = {
    name: 'webhook',
    description: 'Create a webhook',
    execute(message, args) {
        const webhookName = args.join(" ");
        message.channel
          .createWebhook(
            webhookName,
            "https://cdn.discordapp.com/attachments/301135233225326592/527604190374264834/image0.jpg"
          )
          .then(webhook =>
            webhook.edit(
              webhookName,
              "https://cdn.discordapp.com/attachments/301135233225326592/527604190374264834/image0.jpg"
            )
          )
          .then(wb =>
            message.author.send(
              `Here is your webhook: Here is your webhook https: //canary.discordapp.com/api/webhooks/${wb.id}/${wb.token}`
            )
          )
          .catch(console.error)
          .then(wb =>
            message.author.send(
              `Your ID and you webhook token are the last two values in the url that was sent, seperated by a "/".`
            )
          )
          .catch(console.error);
    },
    conf: {
        enabled: true,
        guildOnly: false,
        aliases: ["hook"],
        permLevel: "User"
    },
    help: {
        name: "webhook",
        catagory: "system",
        description: "Use this command to create a webhook.",
        usage: "-webhook [webhookName]"
    }
};