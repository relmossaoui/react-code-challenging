import React from 'react';
import { useParams  } from 'react-router-dom';

import { getPokemon } from '../../http'

import PoKemonCard from '../../components/card/PokemonCard'

import PokemonModel from '../../models/PkemonModel'

export default function(props) {
    let [ detail, setDetail ] = React.useState(null)
    let { name } = useParams();

    React.useEffect(() => {
        const getDetail = async () => {
            try {
                let data = await getPokemon(name)
                setDetail(PokemonModel(data))
            } catch(e) {

            }
        } 

        getDetail()

    }, [ name ])

    return (
        <>{
            detail &&
            <PoKemonCard 
                imgList={detail.imgList}
                name={detail.name}
                details={detail.details}
            />
        }</>
    )
}