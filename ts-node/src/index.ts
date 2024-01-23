import { Pokemon } from "./decorator/pokemon-class";

const charmander = new Pokemon('Charmander');

// (Pokemon.prototype as any ).customeName = 'Picachu'


charmander.savePokemonToDB(35);