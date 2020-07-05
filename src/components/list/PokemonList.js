import React from "react";
import { Link } from 'react-router-dom';

import './PokemonList.css'

export default function({ list }) {

    return(
        <div className="c-flex c-flex-wrap c-flex-sp-around">
            { list.map(name => <Link className="list-item" to={'/detail/' + name} key={name}> {name} </Link>)}    
        </div>
    )
}