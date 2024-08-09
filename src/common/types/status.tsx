import {
  Apple,
  Beef,
  ChefHat,
  Cookie,
  Droplets,
  Earth,
  Flower,
  Frown,
  HandCoins,
  Hourglass,
  Ruler,
  Smile,
  Sparkles,
  Sprout,
  Sun,
  SwatchBook,
  Timer,
  TreePalm,
  Weight,
} from 'lucide-react';

export const StatusLabels = {
  flavor: 'Sabor',
  calories: 'Calorias',
  approximateWeight: 'Peso Aproximado',
  shelfLife: 'Validade',
  preparationTime: 'Tempo de Preparo',
  cuisine: 'Culinária',
  benefit: 'Benefícios',
  curse: 'Malefícios',
  specie: 'Espécie',
  waterRequirement: 'Necessidade de Água',
  sunlightRequirement: 'Necessidade de Sol',
  growthTime: 'Tempo de Crescimento',
  fruit: 'Fruto',
  flowerColor: 'Cor da Flor',
  approximateHeight: 'Altura Aproximada',
  region: 'Região',
  habitat: 'Habitat',
  diet: 'Dieta',
  lifespan: 'Tempo de Vida',
  material: 'Material',
  usage: 'Uso',
  durability: 'Durabilidade',
  originCountry: 'País de Origem',
} as const;

export const StatusIcons: any = {
  flavor: <ChefHat size={20} />,
  calories: <Cookie size={20} />,
  approximateWeight: <Weight size={20} />,
  shelfLife: <Hourglass size={20} />,
  preparationTime: <Timer size={20} />,
  cuisine: <Earth size={20} />,
  benefit: <Smile size={20} />,
  curse: <Frown size={20} />,
  specie: <Sparkles size={20} />,
  waterRequirement: <Droplets size={20} />,
  sunlightRequirement: <Sun size={20} />,
  growthTime: <Sprout size={20} />,
  fruit: <Apple size={20} />,
  flowerColor: <Flower size={20} />,
  approximateHeight: <Ruler size={20} />,
  region: <Earth size={20} />,
  habitat: <TreePalm size={20} />,
  diet: <Beef size={20} />,
  lifespan: <Hourglass size={20} />,
  material: <SwatchBook size={20} />,
  usage: <HandCoins size={20} />,
  durability: <Hourglass size={20} />,
  originCountry: <Earth size={20} />,
};

export const StatusOrder = [
  'flavor', // Sabor
  'cuisine', // Culinária
  'specie', // Espécie
  'region', // Região
  'habitat', // Habitat
  'originCountry', // País de Origem
  'approximateWeight', // Peso Aproximado
  'approximateHeight', // Altura Aproximada
  'flowerColor', // Cor da Flor
  'fruit', // Fruto
  'waterRequirement', // Necessidade de Água
  'sunlightRequirement', // Necessidade de Sol
  'growthTime', // Tempo de Crescimento
  'shelfLife', // Validade
  'calories', // Calorias
  'diet', // Dieta
  'benefit', // Benefícios
  'curse', // Malefícios
  'preparationTime', // Tempo de Preparo
  'lifespan', // Tempo de Vida
  'material', // Material
  'usage', // Uso
  'durability', // Durabilidade
];
