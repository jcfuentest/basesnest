import axios from 'axios';
import { httpAdapter, PokeApiAdapter } from '../api/pokeApi.adapter';
import { Move, DataPokeApi } from '../interfaces/pokeapi-responses.interfaces';

export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }
  
    constructor(
        public readonly id: number, 
        public name: string,
        // Todo: inyectar dependencias
        private readonly https:httpAdapter

    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

    async getMoves(): Promise<Move[]> {
        const data:DataPokeApi = await this.https.get('https://pokeapi.co/api/v2/pokemon/ditto');
        console.log( data.data.moves );
        
        return data.data.moves;
    }

}

const pokeadaptador = new PokeApiAdapter()

export const charmander = new Pokemon( 4, 'Charmander', pokeadaptador );

charmander.getMoves();