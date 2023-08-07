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
        <h1>{pokemon.name}</h1>
        <h1># {pokemon.PokedexId}</h1>
      </div>
      <div>
        <img
          src={pokemon.mainPicture}
          alt={pokemon.name}
          className="stats-image"
        />
        <div>
          {pokemon.elementalType.map((type) => (
            <Button key={type}>{type}</Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonStats;
