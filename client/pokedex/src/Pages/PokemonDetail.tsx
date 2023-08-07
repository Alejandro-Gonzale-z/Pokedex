import axios from "axios";
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import { useParams } from "react-router-dom";
import Pokedex from "../PokemonInterface";
import Moveset from "../components/Moveset/Moveset";
import Moves from "../MovesInterface";
import PokemonStats from "../components/PokemonStats/PokemonStats";

const PokemonDetail = () => {
  const { name } = useParams();
  const [pokedexData, setPokedexData] = useState<any[]>([]); //all pokemon
  const [pokemonData, setPokemonData] = useState<Pokedex | null>(null); //individual pokemon
  const [moveData, setMoveData] = useState<Moves[]>([]);
  
  useEffect(() => {
    // get all pokemon for searchbar
    axios
      .get("http://localhost:5000/pokemon/api/")
      .then((response) => {
        setPokedexData(response.data);
      })
      .catch((error) => {
        console.log("Error fetching all Pokedex data: ", error);
      });

    //get individual pokemon for details
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/pokemon/${name}`
        );
        setPokemonData(response.data);
      } catch (error) {
        console.log("Error fetching individual Pokemon data: ", error);
      }
    };

    fetchPokemonData();

    //get moveset for movetable
    axios
      .get("http://localhost:5000/moves/api")
      .then((response) => {
        setMoveData(response.data);
      })
      .catch((error) => {
        console.log("Error fetching moveset data: ", error);
      });
  }, [name]);

  if (!pokemonData) {
    return <div></div>;
  }

  return (
    <div>
      <SearchBar PokemonList={pokedexData} />
      <PokemonStats pokemon={pokemonData} />
      <Moveset movesetData={moveData} Pokemon={pokemonData} />
    </div>
  );
};

export default PokemonDetail;
