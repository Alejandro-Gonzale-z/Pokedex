export interface Pokedex{
    name: string;
    PokedexId: number;
    weight: number;
    height: number;
    hp: number;
    attack: number;
    defense: number;
    speed: number;
    specialAttack: number;
    specialDefense: number;
    catchRate: number;
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
        name: string;
        levelEvolved: number;
    }[];
  }
export default Pokedex;
