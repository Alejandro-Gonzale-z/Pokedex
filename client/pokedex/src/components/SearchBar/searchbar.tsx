import { useState } from "react";
import { Pokedex } from "../../PokemonInterface";
import React from "react";
import "./searchbar.css";
import searchImage from "./Search-Button-PNG-Image-Free-Download.png";
import pokeballImg from "./pokeball.png";

interface SearchBarProps {
  PokemonList: Pokedex[];
}

const SearchBar: React.FC<SearchBarProps> = ({ PokemonList }) => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const filteredPokemon = PokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().startsWith(searchText.toLowerCase()) || pokemon.PokedexId.toString().startsWith(searchText)
  );

  return (
    <div className="header">
      <a className="title-and-image">
        PokeInfo
        <img src={pokeballImg} alt="Pokeball" className="pokeball-img" />
      </a>
      <div className="search-container">
        <form>
          <input
            type="text"
            placeholder="Search Pokedex"
            value={searchText}
            onChange={handleInputChange}
            className="search-input"
          />
          <img src={searchImage} alt="searchImage" className="search-img" />
        </form>
        {searchText.length > 0 && (
          <ul className="search-results">
            {filteredPokemon.map((pokemon, index) => (
              <li key={index}>{pokemon.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
