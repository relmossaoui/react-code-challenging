import React from 'react';

import Paginator from '../../components/paginator/Paginator'

import { getPokemonPage } from '../../http'

import './Home.css';

const PAGE_SIZE = 20;

export default function(props) {
    let [ pokemons, setPokemons ]       = React.useState([]);
    let [ pageNumber, setPageNumber]    = React.useState(0)
    let [ isLastPage, setIsLastPage]    = React.useState(false)
       
    React.useEffect(() => {
        const getPage = async () => {
            try {
                let { results, next } = await getPokemonPage({pageNumber, pageSize : PAGE_SIZE });     
                
                setPokemons(results.map(({ name }) => name))

                if (!next) setIsLastPage(true)
            } catch(e) {
                
            }
        }
       getPage()
    }, [ pageNumber ])

    const onClick = value => setPageNumber(pageNumber + value)
    return (
        <div >  
            <div className="c-flex c-flex-wrap c-flex-sp-around">
                { pokemons.map(name => <p key={name}> {name} </p>)}    
            </div>
            <Paginator onClick={onClick} isLastPage={isLastPage} isFirstPage={pageNumber === 0}/>
        </div>
    )
}

