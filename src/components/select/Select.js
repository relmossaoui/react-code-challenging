import React from 'react';

import './Select.css'

export default function({ value, onChange, options, defaultOption}) {

    return(
        <select value={value} onChange={onChange}>
            <option value={''} disabled> { defaultOption } </option>
            { options.map(({ name }) => <option key={name} value={name}> {name} </option>)}
        </select>
    )
}