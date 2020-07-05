import React from 'react';
import {
    Link 
} from 'react-router-dom'

import './Header.css';

export default function(props) {


    return (
        <ul className="header c-flex c-flex-sp-between c-flex-center-items">
            <li className="c-flex align-items"> <Link to="/"> Home </Link> </li>          
        </ul>
    )
}