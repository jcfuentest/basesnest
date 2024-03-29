
import axios from 'axios';




export interface httpAdapter {
    get<T>(url:string):Promise<T>;
}

export class PokeApiAdapter implements httpAdapter {

    private readonly axios = axios

    async get(url:string){

        const data = await this.axios.get(url);

        return data;

    }


    async post(){

        return "weno y que pasa"

    }

}