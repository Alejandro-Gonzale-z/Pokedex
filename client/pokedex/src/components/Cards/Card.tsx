import React from "react";
import { Pokedex } from "../../PokemonInterface";
import "./Card.css";

interface CardProps {
  Pokemon: Pokedex[];
}

const Card: React.FC<CardProps> = ({ Pokemon }) => {
  return (
    <div className="wrapper">
      {Pokemon.map((pokemon) => (
        <div key={pokemon.PokedexId} className="pokemon-card">
          <p className="card-text">
            #{pokemon.PokedexId} {pokemon.name}{" "}
          </p>
          <img
            src={pokemon.mainPicture}
            alt={pokemon.name}
            className="card-img"
          />
          <div className="card-body"></div>
        </div>
      ))}
    </div>
  );
};

export default Card;
