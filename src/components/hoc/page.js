
import React from 'react';
import { useParams } from 'react-router-dom';

import Loader from '../../components/loader/Loader'
import Error from '../../components/error/Error'
import PokemonList from "../../components/list/PokemonList";

import { getPokemonsByFilter } from '../../http'

import './Page.css'

import Paginator from '../paginator/Paginator';
const PAGE_SIZE = 20;

/**
 * generate different views component for all pages listing pokemons 
 * 
 * @param { Object } 
 *  @param { String } filter : if fliter === undefined return a Home
 *  @param { function } fetchData : function used to fetch pokemons list
 */

export default function({ filter, fetchData = getPokemonsByFilter }) {

    return (props) => {
        let [ pageNumber, setPageNumber ]   = filter || React.useState(0)
        let [ isLastPage, setIsLastPage ]   = filter || React.useState(false)
        
        let [ pokemons, setPokemons ]       = React.useState([]);
        let [ isLoading, setIsLoading ]     = React.useState(false)
        let [ error, setError ]             = React.useState(null)

        let value = filter ?  useParams()[filter] : pageNumber 
   
        React.useEffect(() => {
            const getPage = async () => {
                try {
                    setIsLoading(true);
                    setError(null)
                    
                    let data = []

                    if (!filter) {
                        let { results, next } = await fetchData({pageNumber, pageSize : PAGE_SIZE });     
                        data = results.map(({ name }) => name)

                        if (!next) setIsLastPage(true)
                    } else {
                        let { pokemon } = await fetchData({ filter , value });     
                        data = pokemon.map(({ pokemon }) => pokemon.name)
                    }
                                        
                    setPokemons(data)

                    setError(null)                 
                    setIsLoading(false)
                    
                } catch(e) {
                    setIsLoading(false)
                    setError(e)
                }
            }
            getPage()
        }, [ value ])

        return (
            <>
                {
                    !filter && <Paginator className="paginator" onClick={value => setPageNumber(pageNumber + value)} isLastPage={isLastPage} isFirstPage={pageNumber === 0}/>
                } 
                {
                    isLoading && <Loader message='chargement en cours' />
                }
                {
                    error && <Error message={error} />
                }
                {
                    !isLoading && !error  && <PokemonList list={pokemons} />
                }  
            </>
        )
    }
}