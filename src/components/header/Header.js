import React from 'react';
import { Link } from 'react-router-dom';

import Filter from '../filter/Filter.js'

import { PK_TYPE_FILTER_NAME, PK_ABILITY_FILTER_NAME } from '../../http'

import './Header.css';

export default function(props) {

    return (
        <ul className="header c-flex c-flex-sp-between c-flex-center-items">
            <li className="c-flex align-items"> <Link to="/"> Home </Link> </li>          
            <li className="">
                <Filter
                    filter={PK_TYPE_FILTER_NAME}
                    defaultOption="Select type"
                />
                
                <Filter
                    filter={PK_ABILITY_FILTER_NAME}
                    defaultOption="Select ability"
                /> 
            </li>
        </ul>
    )
}