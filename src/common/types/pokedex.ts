export const PokemonTypes = {
  normal: 'Normal',
  fire: 'Fogo',
  water: 'Água',
  electric: 'Elétrico',
  grass: 'Planta',
  ice: 'Gelo',
  fighting: 'Lutador',
  poison: 'Veneno',
  ground: 'Terra',
  flying: 'Voador',
  psychic: 'Psíquico',
  bug: 'Inseto',
  rock: 'Pedra',
  ghost: 'Fantasma',
  dark: 'Sombrio',
  dragon: 'Dragão',
  steel: 'Metálico',
  fairy: 'Fada',
} as const;

export type PokemonType = keyof typeof PokemonTypes;

interface Base {
  id: string;
  name: string;
  type: 'food' | 'plant' | 'animal' | 'object';
  description: string;
  image: string;
  pokemonType: PokemonType[];
}

interface Food extends Base {
  type: 'food';
  flavor: string;
  calories: string;
  approximateWeight: string;
  weight: number;
  shelfLife: string;
  preparationTime: string;
  cuisine: string;
  benefit: string;
  curse: string;
}

interface Plant extends Base {
  type: 'plant';
  specie: string;
  waterRequirement: string;
  sunlightRequirement: string;
  growthTime: string;
  fruit: string;
  flowerColor: string;
  approximateWeight: string;
  weight: number;
  approximateHeight: string;
  height: number;
  region: string;
}

interface Animal extends Base {
  type: 'animal';
  approximateWeight: string;
  weight: number;
  approximateHeight: string;
  height: number;
  specie: string;
  habitat: string;
  diet: string;
  lifespan: string;
  region: string;
}

interface Object extends Base {
  type: 'object';
  material: string;
  approximateWeight: string;
  weight: number;
  approximateHeight: string;
  height: number;
  usage: string;
  durability: string;
  originCountry: string;
}

export type PokedexEntry = Food | Plant | Animal | Object;
