const Discord = require("discord.js");
const { Attachment } = require("discord.js");
const client = new Discord.Client();
const db = require("quick.db");

client.once("ready", () => {
  console.log("Your bot name is online!");
  client.user.setActivity(".pokedex {ID} or {name}");
});
               
client.on("message", message => {
if (message.content.startsWith(`.pokedex`)) {
var pokemon = require('./db/pokemon');
      const streamOptions = { seek: 0, volume: 1 };
      		var pkmn = message.content.toString().toLowerCase();
		pkmn = pkmn.substring(9);
		for(var i=0;i<pokemon.length;i++){
  		if(pkmn == pokemon[i]._engName.toLowerCase() || pkmn == pokemon[i]._frName.toLowerCase() || pkmn == pokemon[i]._nb){

				var text = "__POKEDEX__\n";
				text += "**N° "+pokemon[i]._nb+"** \n";
				text += "English name: **"+pokemon[i]._engName+"** \n";
	 			text += "French name: **"+pokemon[i]._frName+"** \n";
				text += "Type: **"+pokemon[i]._type+" "+pokemon[i]._type2+"**\n";
				text += "Catch Ratio: **"+pokemon[i]._catchRate+"**\n\n";
				text += "__Base Stats__\n";
				text += "HP: **"+pokemon[i]._baseStats._hp+"**\n";
				text += "Atk: **"+pokemon[i]._baseStats._atk+"**\n";
				text += "Def: **"+pokemon[i]._baseStats._def+"**\n";
				text += "S. Atk: **"+pokemon[i]._baseStats._sAtk+"**\n";
				text += "S. Def: **"+pokemon[i]._baseStats._sDef+"**\n";
				text += "Spd: **"+pokemon[i]._baseStats._spd+"**";

        let embed = new Discord.RichEmbed()
        .setTitle(pokemon[i]._engName)
        .setDescription(text)
        .setColor("#FFFF00")
        message.channel.send(embed)
			}
		}
 }
});

client.login(process.env.TOKEN)
