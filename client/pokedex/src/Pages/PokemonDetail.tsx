import axios from "axios";
import {useEffect, useState} from "react";
import SearchBar from "../components/SearchBar/searchbar";
import {useParams} from "react-router-dom";
import Pokedex from "../PokemonInterface";



const PokemonDetail = () => {
    const {name} = useParams();
    const [pokedexData,setPokedexData] = useState<any[]>([]);
    const [pokemonData,setPokemonData] =useState<Pokedex | null>(null);

    useEffect(() => {

        axios
        .get("http://localhost:5000/pokemon/api/")
        .then((response)=> {
            setPokedexData(response.data);
        })
        .catch((error) =>{
            console.log("Error fetching all Pokedex data:", error);
        });
        
        const fetchPokemonData = async () => {
          try{
            const response = await axios.get(
              `http://localhost:5000/pokemon/${name}`
            );
            setPokemonData(response.data);
          } catch (error){
            console.log("Error fetching individual Pokemon data:", error);
          }
        };
      
        fetchPokemonData();
    },[name]);

    if (!pokemonData){
      return <div></div>
    }

    return(
      <div>
        <SearchBar PokemonList={pokedexData}/>
        <h1>{pokemonData.name}</h1>
        <h2>{pokemonData.PokedexId}</h2>
        <img src={pokemonData.mainPicture} alt ={pokemonData.name}/>
      </div>  
    );
}

export default PokemonDetail;

