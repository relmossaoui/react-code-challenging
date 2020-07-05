import React from "react";

export default function({ imgList=[], name, details = []}) {

    return(
        <div className="card">
            <div className='card-header'>
                { imgList.map(url => <img src={url} />)}
            </div>
            <div className="title"> { name }</div>
            <div className="details">
                { details.map(({ text, value }) => (
                    <div key={text} className="detail-item">
                        <h3> { text } </h3>
                        <p> { value } </p>
                    </div>
                ))}
            </div>
        </div>
    )
}