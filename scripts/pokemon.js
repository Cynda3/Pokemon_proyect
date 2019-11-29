/* -------------------------------------------------------------------------------------------

	-----------------------------------------------------------------------------------------

	-------------------------		Para lo de las Clases		----------------------------

	-----------------------------------------------------------------------------------------

   -------------------------------------------------------------------------------------------*/
	
   class Pokemon {

   	constructor(name, type){
   		this.name = name;
   		// I will suppose that all pokemon has just 1 type
   		this.type = type;
         // Stats property
         // Recieve every stat from the json
         // Determine every stats with destructuring

         // let stats = ["json.hp", "json.atk", ...]
         // let [hp, atack, defense, spAtack, spDefense, speed] = stats;

   	}

   	// Returns inserted pokemon's weakness
   	weakness(type){
   		switch(this.type.toLowerCase()){
   			case "fire":
   				// Fire is weak against: Water, Ground and Rock.
   				$("#WeaknessResponse").text(this.name+" is "+this.type+" type and is weak against Water, Ground and Rock.");
   				break;
   			case "water":
   				// Water is weak against: Electric, Grass.
   				$("#WeaknessResponse").text(this.name+" is "+this.type+" type and is weak against Electric, Grass.");
   				break;
   			case "grass":
   				// Grass is weak against: Fire, Ice, Poison, Flying and Bug.
   				$("#WeaknessResponse").text(this.name+" is "+this.type+" type and is weak against Fire, Ice, Poison, Flying and Bug.");
   				break;
   			case "electric":
   				// Electric is weak against: Ground.
   				$("#WeaknessResponse").text(this.name+" is "+this.type+" type and is weak against Ground.");
   				break;
   			case "flying":
   				// Flying is weak against: Electric, ice and rock.
   				$("#WeaknessResponse").text(this.name+" is "+this.type+" type and is weak against Electric, ice and rock.");
   				break;
   			case "fighting":
   				// Fighting is weak against: Flying, psychic and fairy.
   				$("#WeaknessResponse").text(this.name+" is "+this.type+" type and is weak against Flying, psychic and fairy.");
   				break;
   			case "ground":
   				// Ground is weak against: Water, Grass and Ice.
   				$("#WeaknessResponse").text(this.name+" is "+this.type+" type and is weak against Water, Grass and Ice.");
   				break;
   			case "rock":
   				// Rock is weak against: Water, Grass, Fighting, Ground and Steel.
   				$("#WeaknessResponse").text(this.name+" is "+this.type+" type and is weak against Water, Grass, Fighting, Ground and Steel.");
   				break;
   			case "steel":
   				// Steel is weak against: Fire, Fighting and Ground.
   				$("#WeaknessResponse").text(this.name+" is "+this.type+" type and is weak against Fire, Fighting and Ground.");
   				break;
   			case "bug":
   				// Bug is weak against: Fire, Flying and Rock.
   				$("#WeaknessResponse").text(this.name+" is "+this.type+" type and is weak against Fire, Flying and Rock.");
   				break;
   			case "poison":
   				// Poison is weak against: Ground and Psychic.
   				$("#WeaknessResponse").text(this.name+" is "+this.type+" type and is weak against Ground and Psychic.");
   				break;
   			case "psychic":
   				// Psychic is weak against: Bug, Ghost and Dark.
   				$("#WeaknessResponse").text(this.name+" is "+this.type+" type and is weak against Bug, Ghost and Dark.");
   				break;
   			case "dark":
   				// Dark is weak against: Fighting, Bug and Fairy.
   				$("#WeaknessResponse").text(this.name+" is "+this.type+" type and is weak against Fighting, Bug and Fairy.");
   				break;
   			case "ghost":
   				// Ghost is weak against: Ghost and Dark.
   				$("#WeaknessResponse").text(this.name+" is "+this.type+" type and is weak against Ghost and Dark.");
   				break;
   			case "normal":
   				// Normal is weak against: Fighting.
   				$("#WeaknessResponse").text(this.name+" is "+this.type+" type and is weak against Fighting.");
   				break;
   			case "fairy":
   				// Fairy is weak against: Poison and Steel.
   				$("#WeaknessResponse").text(this.name+" is "+this.type+" type and is weak against Poison and Steel.");
   				break;
   			case "dragon":
   				// Dragon is weak against: Dragon, Fairy and Ice.
   				$("#WeaknessResponse").text(this.name+" is "+this.type+" type and is weak against Dragon, Fairy and Ice.");
   				break;
   			case "ice":
   				// Ice is weak against: Fire, Fighting, Rock and Steel.
   				$("#WeaknessResponse").text(this.name+" is "+this.type+" type and is weak against Fire, Fighting, Rock and Steel.");
   				break;
   			default:
   				break;
   		}
   	}

   	// Returns inserted pokemon's resistances
   	resistances(type){
   		switch(type.toLowerCase()){
   			case "fire":
   				// Fire resist: Fire, Grass, Ice, Steel and Fairy.
   				$("#ResistanceResponse").text(this.name+" is "+this.type+" type and resist against Fire, Grass, Ice, Steel and Fairy.");
   				break;
   			case "water":
   				// Water resist: Water, Fire, Ice and Steel.
   				$("#ResistanceResponse").text(this.name+" is "+this.type+" type and resist against Water, Fire, Ice and Steel.");
   				break;
   			case "grass":
   				// Grass resist: Grass, Water, Electric and Ground.
   				$("#ResistanceResponse").text(this.name+" is "+this.type+" type and resist against Grass, Water, Electric and Ground.");
   				break;
   			case "electric":
   				// Electric resist: Electric, Flying and Steel.
   				$("#ResistanceResponse").text(this.name+" is "+this.type+" type and resist against Electric, Flying and Steel.");
   				break;
   			case "flying":
   				// Flying resist: Grass, Fighting and Bug.
   				$("#ResistanceResponse").text(this.name+" is "+this.type+" type and resist against Grass, Fighting and Bug.");
   				break;
   			case "fighting":
   				// Fighting resist: Bug, Rock and Dark.
   				$("#ResistanceResponse").text(this.name+" is "+this.type+" type and resist against Bug, Rock and Dark.");
   				break;
   			case "ground":
   				// Ground resist: Poison and Rock.
   				$("#ResistanceResponse").text(this.name+" is "+this.type+" type and resist against Poison and Rock.");
   				break;
   			case "rock":
   				// Rock resist: Normal, Fire, Poison and Flying.
   				$("#ResistanceResponse").text(this.name+" is "+this.type+" type and resist against Normal, Fire, Poison and Flying.");
   				break;
   			case "steel":
   				// Steel resist: Normal, Grass, Ice, Flying, Psychic, Bug, Rock, Dragon, Steel and Fairy.
   				$("#ResistanceResponse").text(this.name+" is "+this.type+" type and resist against Normal, Grass, Ice, Flying, Psychic, Bug, Rock, Dragon, Steel and Fairy.");
   				break;
   			case "bug":
   				// Bug resist: Grass, Fighting and Ground.
   				$("#ResistanceResponse").text(this.name+" is "+this.type+" type and resist against Grass, Fighting and Ground.");
   				break;
   			case "poison":
   				// Poison resist: Grass, Fighting, Poison, Bug and Fairy.
   				$("#ResistanceResponse").text(this.name+" is "+this.type+" type and resist against Grass, Fighting, Poison, Bug and Fairy.");
   				break;
   			case "psychic":
   				// Psychic resist: Fighting and Psychic.
   				$("#ResistanceResponse").text(this.name+" is "+this.type+" type and resist against Fighting and Psychic.");
   				break;
   			case "dark":
   				// Dark resist: Ghost and Dark.
   				$("#ResistanceResponse").text(this.name+" is "+this.type+" type and resist against Ghost and Dark.");
   				break;
   			case "ghost":
   				// Ghost resist: Poison anda Bug.
   				$("#ResistanceResponse").text(this.name+" is "+this.type+" type and resist against Poison anda Bug.");
   				break;
   			case "normal":
   				// Normal resist: Nothing.
   				$("#ResistanceResponse").text(this.name+" is "+this.type+" type and resist against Nothing.");
   				break;
   			case "fairy":
   				// Fairy resist: Fighting, Bug and Dark.
   				$("#ResistanceResponse").text(this.name+" is "+this.type+" type and resist against Fighting, Bug and Dark.");
   				break;
   			case "dragon":
   				// Dragon resist: Fire, Water, Grass and Electric.
   				$("#ResistanceResponse").text(this.name+" is "+this.type+" type and resist against Fire, Water, Grass and Electric.");
   				break;
   			case "ice":
   				// Ice resist: Ice.
   				$("#ResistanceResponse").text(this.name+" is "+this.type+" type and resist against Ice.");
   				break;
   			default:
   				break;
   		}
   	}


   	// Returns inserted pokemon's inmunities
   	inmunities(type){
   		switch(type){

   		}
   	}
   };

   export { Pokemon };