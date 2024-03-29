
import axios from 'axios';
import { DataPokeApi } from '../interfaces/pokeapi-responses.interfaces';

export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/4.jpg`
    }
    
    constructor( public id: number,
                 public name:string,
               ){}

    scream(){
        console.log(`${this.name.toLowerCase()}!!!!!`)
    }

    speake(){
        console.log(`${this.name}, ${this.name}`)
    }

    async getMove() {
        const datamart:DataPokeApi= await axios.get<DataPokeApi>('https://pokeapi.co/api/v2/pokemon/ditto');
        console.log(datamart.data.abilities)
    }

}

export const charmander = new Pokemon(1, 'pikachu')

charmander.getMove()

