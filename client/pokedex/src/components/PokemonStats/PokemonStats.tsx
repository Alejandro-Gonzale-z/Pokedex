import Pokedex from "../../PokemonInterface";
import "./PokemonStats.css";
import Button from "../Button/Button";
import StatsBar from "../StatsBar/StatsBar";

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
        <div className="stats-image-container">
          <StatsBar heading="HP" value ={pokemon.hp} />
          <StatsBar heading="Attack" value = {pokemon.attack} />
          <StatsBar heading="Defense" value = {pokemon.defense} />
          <StatsBar heading="Speed" value = {pokemon.speed} />
          <StatsBar heading="Special Attack" value = {pokemon.specialAttack} />
          <StatsBar heading="Special Defense" value = {pokemon.specialDefense} />
        <img
          src={pokemon.mainPicture}
          alt={pokemon.name}
          className="main-image"
          />
          </div>
        <div className="main-button-container">
          {pokemon.elementalType.map((type) => (
            <Button key={type} arrayLength={pokemon.elementalType.length}>
              {type}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonStats;
