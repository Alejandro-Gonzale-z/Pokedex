import Pokedex from "../../PokemonInterface";
import "./PokemonStats.css";
import Button from "../Button/Button";

interface PokemonStatsProps {
  pokemon: Pokedex;
}

const PokemonStats: React.FC<PokemonStatsProps> = ({ pokemon }) => {
  return (
    <div className="stats-body">
      <div className="stats-header">
        <h1 className={`${pokemon.elementalType[0].toLowerCase()}-font`}>
          {pokemon.name}
        </h1>
        <h1 className={`${pokemon.elementalType[0].toLowerCase()}-font`}>
          # {pokemon.PokedexId}
        </h1>
      </div>
      <div>
        {/* <div>{pokemon.description}</div> */}
        <img
          src={pokemon.mainPicture}
          alt={pokemon.name}
          className="stats-image"
        />
        <div className="main-button-container">
          {pokemon.elementalType.map((type) => (
            <Button key={type} arrayLength={pokemon.elementalType.length}>{type}</Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonStats;
