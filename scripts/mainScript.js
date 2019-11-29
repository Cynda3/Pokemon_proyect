      import { Pokemon } from '/scripts/pokemon.js';

      $('#submit').click(function(){
         let pokemon = {
            name: $('#name').val(),
            type: $('#type').val()
         };
         let {name, type} = pokemon;
         console.log(name+" "+ type);
         let newPokemon = new Pokemon(name, type);
         newPokemon.weakness(pokemon.type);
         newPokemon.resistances(pokemon.type);
       });








/* -------------------------------------------------------------------------------------------

	-----------------------------------------------------------------------------------------

	        ------------------------		Para los json		----------------------------

	        -------------------			Con objetos			----------------------------

	-----------------------------------------------------------------------------------------

   -------------------------------------------------------------------------------------------*/
   // Array donde se guardaran los pokemon
   let pokemons = [];


   // Gracias a JQuery, me ahorro toda la llamada ajax con esta funcion
   // y puedo recoger los datos del json facilmente
   $.getJSON( "pokemon.json-master/pokedex.json", function( data ) {

      // Recorro todos los objetos del json y los añado al array
     $.each( data, function( key, val ) {
      pokemons.push(val);
     });
   });

      


/*



		// Convierto el json en un objeto
		let alien = JSON.parse('{ "alien":[{"name":"lola", "surname":"drone", "mail":"loladrone@lotodo.com","dni":"XXXXXXXX"}]}');


		let persona = 
		{
			nombre: "",
			apellido: "",
			email: "",
			dni: "",
			// Metodo para establecer las propiedades del objeto por medio de un objeto introducido
			set datos(obj) {
				this.nombre = obj.alien[0].name;
				this.apellido = obj.alien[0].surname;
				this.email = obj.alien[0].mail;
				this.dni = obj.alien[0].dni;
			},
			// Metodo para devolver las propiedades del objeto
			get datos(){
				return this.nombre+" "+this.apellido+" "+this.email+" "+this.dni;
			}
		};



		// Accedo al set para establecer los datos
		persona.datos = alien;

		// Devuelvo los datos del objeto por medio del get
		console.log(persona.datos);
*/