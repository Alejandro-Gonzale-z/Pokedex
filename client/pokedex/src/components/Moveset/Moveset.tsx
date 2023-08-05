import { useState, useEffect } from "react";
import Moves from "../../MovesInterface";
import Pokedex from "../../PokemonInterface";
import "./Moveset.css";

interface movesetProps {
  movesetData: Moves[];
  Pokemon: Pokedex;
}
interface Move {
  name: string;
  type: string;
  category: string;
  power: number;
  powerPoints: number;
  accuracy: number;
  levelLearned: number;
}
interface Icons {
    [key: string]: string;
}

const Moveset: React.FC<movesetProps> = ({ movesetData, Pokemon }) => {
  const [filteredMoves, setFilteredMoves] = useState<Move[]>([]);
  const icons: Icons = {
    Status: "https://img.pokemondb.net/images/icons/move-status.png",
    Physical: "https://img.pokemondb.net/images/icons/move-physical.png",
    Special: "https://img.pokemondb.net/images/icons/move-special.png",
  };

  useEffect(() => {
    const mergeMoves = Pokemon.moveset.map((moveFromPokemon) => {
      const moveFromMovesetData = movesetData.find(
        (move) => move.name === moveFromPokemon.moveName
      );

      if (moveFromMovesetData) {
        return {
          ...moveFromMovesetData,
          levelLearned: moveFromPokemon.levelLearned,
        };
      }

      return null;
    });

    const filteredMoveset = mergeMoves.filter(
      (move) => move !== null
    ) as Move[];

    setFilteredMoves(filteredMoveset);
  }, [Pokemon]);

  
  if (!movesetData) {
    return null;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Level</th>
            <th>Name</th>
            <th>Power</th>
            <th>PP</th>
            <th>Accuracy</th>
            <th>Type</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {filteredMoves.map((move) => (
            <tr key={move.name}>
              <td>{move.levelLearned}</td>
              <td>{move.name}</td>
              <td>{move.power !== 0 ? move.power : "-"}</td>
              <td>{move.powerPoints}</td>
              <td>{move.accuracy}</td>
              <td>
                <button className={`list-button ${move.type.toLowerCase()}`}>
                  {move.type}
                </button>
              </td>
              <td>
                <img src={icons[move.category]} alt={move.category} className="small-icon"/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Moveset;
