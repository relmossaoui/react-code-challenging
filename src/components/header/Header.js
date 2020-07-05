import React from 'react';
import {
    Link,
    useHistory
} from 'react-router-dom';

import { getPokemonTypes } from '../../http'

import './Header.css';

export default function(props) {
    let [ types, setTypes ] = React.useState([])
    let [ selectedType, setSelectedType ] = React.useState('')

    const history = useHistory();

    React.useEffect(() => {
        const getTypes = async () => {
            try {
                let { results } = await getPokemonTypes()

                setTypes(results)
            } catch(e) {

            }
        }

        getTypes()
    }, [ selectedType ])

    function onSelectType(e) {
        setSelectedType(e.target.value)
        history.push("/type/" + e.target.value);
    }

    return (
        <ul className="header c-flex c-flex-sp-between c-flex-center-items">
            <li className="c-flex align-items"> <Link to="/"> Home </Link> </li>          
            <li className=""> 
                <select value={selectedType} onChange={onSelectType}>
                    <option value={''} disabled> Select Type </option>
                    { types.map(({ name }) => <option key={name} value={name}> {name} </option>)}
                </select>
            </li>
        </ul>
    )
}