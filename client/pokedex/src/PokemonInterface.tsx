export interface Pokedex{
    name: string;
    PokedexId: number;
    weight: number;
    height: number;
    description: string;
    elementalType: string[];
    strength: string[];
    weakness: string[];
    mainPicture: string;
    moveset: {
      levelLearned: number;
      moveName: string;
    }[];
    evolutionChain: {
      pokemon: Pokedex;
      method: string;
    }[];
  }
export default Pokedex;