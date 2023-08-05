import Pokedex from "../../PokemonInterface";
import "./PokemonStats.css";
interface PokemonStatsProps {
  pokemon: Pokedex;
}

const PokemonStats: React.FC<PokemonStatsProps> = ({ pokemon }) => {
  return (
    <div>
      <div className="stats-header">
        <h1>{pokemon.name}</h1>
        <h1># {pokemon.PokedexId}</h1>
      </div>
      <div className="image-container">
        <img
          src={pokemon.mainPicture}
          alt={pokemon.name}
          className="stats-image"
        />
        <div className="stats-button">
          {pokemon.elementalType.map((type) => (
            <button>{type}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonStats;
