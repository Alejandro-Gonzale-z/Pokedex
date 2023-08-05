import Pokedex from "../../PokemonInterface";
import "./PokemonStats.css";
interface PokemonStatsProps {
  pokemon: Pokedex;
}

const PokemonStats: React.FC<PokemonStatsProps> = ({ pokemon }) => {
  return (
    <div>
      <div>
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
            <button>{type}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonStats;
