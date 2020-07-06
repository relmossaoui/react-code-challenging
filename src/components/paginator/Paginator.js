import React from 'react'

export default function({ isFirstPage, isLastPage, onClick, className }) {

    return(
        <div className={className + " c-flex c-flex-sp-around"}>
            <button disabled={isFirstPage} onClick={() => onClick(-1)}> previous </button>            
            <button disabled={isLastPage} onClick={() => onClick(1)}> next </button>
        </div>
    )
}