import React from 'react'

export default function({ isFirstPage, isLastPage, onClick }) {

    return(
        <div>
            <button disabled={isLastPage} onClick={() => onClick(1)}> next </button>
            <button disabled={isFirstPage} onClick={() => onClick(-1)}> previous </button>            
        </div>
    )
}