const Discord = require("discord.js");
const token = process.env.token;
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.DIRECT_MESSAGES
    ]
});




// le prefix du bot
const prefix = ";";

Client.on("ready", () => {
    console.log("LIEN DE L'IMAGE DU BOT   https://www.creageneve.com/wp-content/uploads/2018/05/evolution-du-metier-de-developpeur-informatique.jpg")
    console.log("\nYES-BOT Opérationnel-YES")

});









// crér=er un message sans que le bot se reponde a lui même
Client.on("messageCreate", message => {
    if (message.author.bot) return;



// commande ;clear

Client.on("message", message => {
    if(message.member.permissions.has("MANAGE_MESSAGES")){
        if(message.content.startsWith(prefix + "clear")){
            let args = message.content.split(" ");
            
            if(args[1] == underfined){
                message.reply("Nombre de message non ou mal défini.");
            }
            else {
                let number = parseInt(args[1]);

                if(isNaN(number)){
                    message.reply("Nombre de message non ou mal défini.");
                }
                else {
                    message.channel.bulkDelete(number).then(messages => {
                        console.log("Supression de " + messages.size + " messages réussi !");
                    }).catch(err => {
                        console.log("erreur de clear : " + err);
                    });
                }
            }
        }
    }
});















    //help
    if(message.content === prefix + "help"){
        const embed = new Discord.MessageEmbed()
            .setColor("#660099")
            .setTitle("**__Liste des Commande__**")
            .setAuthor("Lien de mon discord", "https://www.creageneve.com/wp-content/uploads/2018/05/evolution-du-metier-de-developpeur-informatique.jpg","https://discord.gg/ayKBhnhhKe")
            .setThumbnail("https://www.creageneve.com/wp-content/uploads/2018/05/evolution-du-metier-de-developpeur-informatique.jpg")
            .addField(";help", "Sert à affiche la liste des commandes.")
            .addField(";info", "Sert à afficher les informations du BOT.")
            .setFooter("Ce bot appartient à Pitchôu");


        message.channel.send({ embeds: [embed]})
    console.log("\nLa commande", prefix, "help a été exécuter avec succès");
    }


    //info
    if(message.content === prefix + "info"){
        message.channel.send(Image="https://www.creageneve.com/wp-content/uploads/2018/05/evolution-du-metier-de-developpeur-informatique.jpg");
        const embed = new Discord.MessageEmbed()
            .setColor("#660099")
            .setTitle("**__Salut, je suis un B.O.T créer par pitchôu__**")
            .addField("\n\nPréfixe → ;", "Sert à faire fonctionner les commandes.")
            .addField("\n;help", "Sert à affiche la liste des commandes.")
            .setFooter("Ce bot appartient à Pitchôu");

        message.channel.send({ embeds: [embed]})
    console.log("\nLa commande", prefix, "info a été exécuter avec succès");
    }






//              --------------------------------/toute les commande cacher pour les modo admin fonda...\--------------------------------


//commande = lglogs(code)

//Fondateur\\             --------code = lglogs987789--------

//l'équipe de modération\\--------code = lglogs0099--------







        //commande cacher uniquement visible par le //Fondateur\\                    --------code = lglogs987789 --------

        if (message.content === prefix + "lglogs987789"){

        //suprmier l'autre message pour cacher la commande envoyer par l'utilisateur
        message.channel.bulkDelete(1).then(message => {
            console.log("le message a bien a été suprimer")
        })

            message.channel.send("**__Bienvenue dans les logs du Fondateur__**")
            message.channel.send("**__Il y a p i t c h ô u, Fluxiô dans ce rôle__**");
        console.log("\nla commande ", prefix, "lglogs987789 (Fondateur) a été executer avec succès");
        }







        //commande cacher uniquement visible par //l'équipe de modération\\           --------code = lglogs0099--------
        if (message.content === prefix + "lglogs0099"){

        //suprmier l'autre message pour cacher la commande envoyer par l'utilisateur
        message.channel.bulkDelete(1).then(message => {
            console.log("le message a bien a été suprimer")
        })

            message.channel.send("\n**__Bienvenue dans les logs de l'équipe de modération__**")
            message.channel.send("**enzo_xav, P i t c h ô u, Fluxiô sont dans ce rôle**")
            message.channel.send("\n\n\nbot créer par P i t c h ô u\nBot développeur par P i t c h ô u "); 

        console.log("\nla commande ", prefix, "lglogs0099 (équipe de modération) a été executer avec succès");
        }
});







// lien discord règlement https://discord.gg/Ge59wPsC42

    







































bot.login(token);

// OTI2Nzk5NzQwMjIwMzU0NTkx.YdA7hQ.d3BAGshnKe9jqsUmvXQ4fv4du4U
