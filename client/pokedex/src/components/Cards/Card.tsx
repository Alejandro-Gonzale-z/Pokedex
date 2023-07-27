import React from "react";
import { Pokedex } from "../../PokemonInterface";
import "./Card.css";

interface CardProps {
  Pokemon: Pokedex[];
  filteredList: string[];
}

const Card: React.FC<CardProps> = ({ Pokemon, filteredList }) => {
  const filteredPokemon = Pokemon.filter((pokemon) =>
    filteredList.some((type) => pokemon.elementalType.includes(type))
  );

  return (
    <div className="wrapper">
      {filteredPokemon.map((pokemon) => (
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
