import React from "react";
import {Pokedex} from "../../PokemonInterface";

interface SingleCardProps{
    Pokemon:Pokedex[];
}

const SingleCard: React.FC<SingleCardProps> = ({Pokemon}) =>{

    return (
        <div>
            <img src={Pokemon[1].mainPicture}/>
            <h1>{Pokemon[1].PokedexId}</h1>
            <p>{Pokemon[1].name}</p>
        </div>
    )
}

export default SingleCard;