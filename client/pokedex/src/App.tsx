import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/searchbar";
import axios from "axios";
import SingleCard from "./components/SingleCard/SingleCard";
import Card from "./components/Cards/Card";

function App() {
  const [pokedexData, setPokedexData] = useState<any[]>([]);

  useEffect(() => {
    // Fetch Pokedex data from the API
    axios
      .get("http://localhost:5000/api/")
      .then((response) => {
        setPokedexData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching Pokedex data:", error);
      });
  }, []);

  return (
    <div>
      <SearchBar PokemonList={pokedexData} />
      <Card Pokemon={pokedexData} />
    </div>
  );
}

export default App;
