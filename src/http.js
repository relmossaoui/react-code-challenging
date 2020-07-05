import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/'

export async function getPokemonPage({pageNumber = 0, pageSize = 20 }) {
    
    let url = `pokemon?limit=${pageSize}&offset=${pageSize * pageNumber}`

    try {
        let { data } =  await axios.get(BASE_URL + url)  

        return data
    } catch(e) {
        let { status } = e.response;

        if (status === 404) 
            throw 'unavailable resource'
        
        throw 'pokemons fetching failed'
    }
}

export async function getPokemonTypes() {

    try {
        let { data } =  await axios.get(BASE_URL + 'type')  

        return data
    } catch(e) {
        let { status } = e.response;

        if (status === 404) 
            throw 'unavailable resource'
        
        throw 'pokemon types fetching failed'
    }  

}