import React from "react";
import { NavLink } from 'react-router-dom';

import './PokemonList.css'

export default function({ list }) {

    return(
        <div className="c-flex c-flex-wrap c-flex-sp-around">
            { list.map(name => <p className="list-item" to={'/detail/' + name} key={name}> {name} </p>)}    
        </div>
    )
}