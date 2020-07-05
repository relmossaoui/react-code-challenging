import React from 'react';
import { useParams } from 'react-router-dom';

import Loader from '../../components/loader/Loader'
import Error from '../../components/error/Error'

import { getPokemonsByType } from '../../http'


export default function(props) {
    let [ pokemons, setPokemons ] = React.useState([]);
    let [ isLoading, setIsLoading ]     = React.useState(false)
    let [ error, setError ]         = React.useState(null)

    
    let { type } = useParams()
   
    React.useEffect(() => {
        const getPage = async () => {
            try {
                setIsLoading(true);

                let { pokemon } = await getPokemonsByType(type);     
                
                setPokemons(pokemon.map(({ pokemon }) => pokemon.name))

                setError(null)                 
                setIsLoading(false)
                
            } catch(e) {
                setIsLoading(false)
                setError(e)
            }
        }
        getPage()
    }, [ type ])

    return (
        <>
            {
                isLoading && <Loader message='chargement en cours' />
            }
            {
                error && <Error message={error} />
            }
            {
                !isLoading && !error  && 

                <div className="c-flex c-flex-wrap c-flex-sp-around">
                    { pokemons.map(name => <p key={name}> {name} </p>)}    
                </div>
            }
            
        </>
    )
}