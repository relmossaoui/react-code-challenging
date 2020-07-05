import React from 'react';
import {
    Link,
    useHistory
} from 'react-router-dom';

import Select from '../select/Select.js'

import { getPkFilterList, PK_TYPE_FILTER_NAME, PK_ABILITY_FILTER_NAME } from '../../http'

import './Header.css';

export default function(props) {
    let [ types, setTypes ] = React.useState([])
    let [ selectedType, setSelectedType ] = React.useState('')

    const history = useHistory();

    React.useEffect(() => {
        const getTypes = async () => {
            try {
                let { results } = await getPkFilterList(PK_TYPE_FILTER_NAME)

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

    let [ abilities, setAbilities ] = React.useState([])
    let [ selectedAbility, setSelectedAbility] = React.useState('')


    React.useEffect(() => {
        const getAbilities = async () => {
            try {
                let { results } = await getPkFilterList(PK_ABILITY_FILTER_NAME)

                setAbilities(results)
            } catch(e) {

            }
        }

        getAbilities()
    }, [ selectedAbility ])

    function onSelectAbility(e) {
        setSelectedAbility(e.target.value)
        history.push("/ability/" + e.target.value);
    }

    return (
        <ul className="header c-flex c-flex-sp-between c-flex-center-items">
            <li className="c-flex align-items"> <Link to="/"> Home </Link> </li>          
            <li className="">
                <Select 
                    options={types} 
                    value={selectedType} 
                    onChange={onSelectType} 
                    defaultOption="Select type"
                />
                <Select 
                    options={abilities} 
                    value={selectedAbility} 
                    onChange={onSelectAbility} 
                    defaultOption="Select ability"
                /> 
            </li>
        </ul>
    )
}