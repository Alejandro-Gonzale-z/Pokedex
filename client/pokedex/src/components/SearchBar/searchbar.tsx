import { useState, useRef, useEffect } from "react";
import { Pokedex } from "../../PokemonInterface";
import React from "react";
import "./searchbar.css";
import searchImage from "./Search-Button-PNG-Image-Free-Download.png";
import pokeballImg from "./pokeball.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
interface SearchBarProps {
  PokemonList: Pokedex[];
}

const SearchBar: React.FC<SearchBarProps> = ({ PokemonList }) => {
  const [searchText, setSearchText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    setIsVisible(true);
  };

  const handleCardClick = () => {
    setIsVisible(false);
  };

  const filteredPokemon = PokemonList.filter(
    (pokemon) =>
      pokemon.name.toLowerCase().startsWith(searchText.toLowerCase()) ||
      pokemon.PokedexId.toString().startsWith(searchText)
  );

  const searchTextPokemon = filteredPokemon.some(
    (pokemon) =>
      pokemon.name.toLowerCase().startsWith(searchText.toLowerCase()) ||
      pokemon.PokedexId.toString().startsWith(searchText)
  );

  const handleEnterKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const newSearchText = searchText.toLowerCase().trim();
      const pokemon = PokemonList.find(
        (pokemon) =>
          pokemon.name.toLowerCase() === newSearchText ||
          pokemon.PokedexId.toString() === newSearchText
      );

      if (pokemon) {
        setIsVisible(false);
        navigate(`/pokemon/${pokemon.name}`);
      } else {
        event.preventDefault();
      }
    }
  };

  return (
    <div className="header">
      <a href="/" className="title-and-image">
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
            onKeyDown={handleEnterKey}
          />
          <img src={searchImage} alt="searchImage" className="search-img" />
        </form>
        {searchText.length > 0 && searchTextPokemon && isVisible && (
          <ul className="search-results">
            {filteredPokemon.map((pokemon, index) => (
              <Link
                to={`/pokemon/${pokemon.name}`}
                className="link"
                onClick={handleCardClick}
              >
                <li key={index}>{pokemon.name}</li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
