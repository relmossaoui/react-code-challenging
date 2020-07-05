import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/'

/**
 * fetch pokemons related data
 * 
 * @param { String } url            : resource url
 * @param {*} defaultErrorMessage   : error message for error with status !== 404
 */
async function fetchData(url, defaultErrorMessage = "Data fetching failed") {
    try {
        let { data } =  await axios.get(BASE_URL + url)      

        return data

    } catch(e) {
        let { status } = e.response

        if (status === 404) 
            throw 'unavailable resource'
        
        throw defaultErrorMessage
    } 
}

export const getPokemonPage     = async ({pageNumber = 0, pageSize = 20 }) => await fetchData(`pokemon?limit=${pageSize}&offset=${pageSize * pageNumber}`, 'Page fetching failed')

export const getPokemonTypes    = async () => await fetchData('type', 'pokemon types fetching failed')

export const getPokemonsByType  = async (type) => await fetchData('type/' + type, 'Pokemons fetching failed')

export const getPokemon         = async (name) => await fetchData('pokemon/' + name, 'Pokemon fetching failed') 
