import React from 'react';

import Paginator from '../../components/paginator/Paginator'
import Loader from '../../components/loader/Loader.js'
import Error from '../../components/error/Error.js'
import PokemonList from "../../components/list/PokemonList";

import { getPokemonPage } from '../../http'

import './Home.css';

const PAGE_SIZE = 20;

export default function(props) {
    let [ pokemons, setPokemons ]       = React.useState([]);
    let [ pageNumber, setPageNumber]    = React.useState(0)
    let [ isLastPage, setIsLastPage]    = React.useState(false)
    let [ isLoading, setIsLoading ]     = React.useState(false)
    let [ error, setError ]             = React.useState(null)
 
    React.useEffect(() => {
        const getPage = async () => {
            try {
                setIsLoading(false)

                let { results, next } = await getPokemonPage({pageNumber, pageSize : PAGE_SIZE });     
                
                setPokemons(results.map(({ name }) => name))

                if (!next) setIsLastPage(true)

                setIsLoading(false)
                setError(null)
            } catch(e) {
                setIsLoading(false)
                setError(e)
            }
        }
       getPage()
    }, [ pageNumber ])

    const onClick = value => setPageNumber(pageNumber + value)
    return (
        <div > 
            {
                isLoading && <Loader message='chargement en cours' />
            }
            {
                error && <Error message={error} />
            }
            {
                !error && !isLoading && <PokemonList list={pokemons} />        
            }
            
            <Paginator onClick={onClick} isLastPage={isLastPage} isFirstPage={pageNumber === 0}/>
        </div>
    )
}

