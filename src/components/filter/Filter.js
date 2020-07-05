import React from 'react';
import { useHistory } from 'react-router-dom';

import Select from '../select/Select.js'

import { getPkFilterList } from '../../http.js'


export default function({ filter, defaultOption }) {

    let [ options, setOptions ] = React.useState([])
    let [ selectedOption, setSelectedOption ] = React.useState('')

    const history = useHistory();

    React.useEffect(() => {
        const getTypes = async () => {
            try {
                let { results } = await getPkFilterList(filter)

                setOptions(results)
            } catch(e) {

            }
        }

        getTypes()
    }, [ selectedOption ])

    function onFilter(e) {
        setSelectedOption(e.target.value)
        history.push('/' + filter + '/' + e.target.value);
    }

    return(
        <Select 
            options={options} 
            value={selectedOption} 
            onChange={onFilter} 
            defaultOption={defaultOption}
        />
    )
}