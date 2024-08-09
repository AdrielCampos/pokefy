import { PokemonType } from '../types/pokedex';

export const handleBackgroundColor = (type: PokemonType) => {
  switch (type) {
    case 'normal':
      return 'from-[var(--color-normal-secondary)] to-[var(--color-normal-tertiary)]';
    case 'fire':
      return 'from-[var(--color-fire-secondary)] to-[var(--color-fire-tertiary)]';
    case 'water':
      return 'from-[var(--color-water-secondary)] to-[var(--color-water-tertiary)]';
    case 'electric':
      return 'from-[var(--color-electric-secondary)] to-[var(--color-electric-tertiary)]';
    case 'grass':
      return 'from-[var(--color-grass-secondary)] to-[var(--color-grass-tertiary)]';
    case 'ice':
      return 'from-[var(--color-ice-secondary)] to-[var(--color-ice-tertiary)]';
    case 'fighting':
      return 'from-[var(--color-fighting-secondary)] to-[var(--color-fighting-tertiary)]';
    case 'poison':
      return 'from-[var(--color-poison-secondary)] to-[var(--color-poison-tertiary)]';
    case 'ground':
      return 'from-[var(--color-ground-secondary)] to-[var(--color-ground-tertiary)]';
    case 'flying':
      return 'from-[var(--color-flying-secondary)] to-[var(--color-flying-tertiary)]';
    case 'psychic':
      return 'from-[var(--color-psychic-secondary)] to-[var(--color-psychic-tertiary)]';
    case 'bug':
      return 'from-[var(--color-bug-secondary)] to-[var(--color-bug-tertiary)]';
    case 'rock':
      return 'from-[var(--color-rock-secondary)] to-[var(--color-rock-tertiary)]';
    case 'ghost':
      return 'from-[var(--color-ghost-secondary)] to-[var(--color-ghost-tertiary)]';
    case 'dark':
      return 'from-[var(--color-dark-secondary)] to-[var(--color-dark-tertiary)]';
    case 'dragon':
      return 'from-[var(--color-dragon-secondary)] to-[var(--color-dragon-tertiary)]';
    case 'steel':
      return 'from-[var(--color-steel-secondary)] to-[var(--color-steel-tertiary)]';
    case 'fairy':
      return 'from-[var(--color-fairy-secondary)] to-[var(--color-fairy-tertiary)]';
    default:
      return 'from-[var(--color-normal-secondary)] to-[var(--color-normal-tertiary)]';
  }
};

export const handleColor = (type: PokemonType) => {
  switch (type) {
    case 'normal':
      return 'bg-normal-primary';
    case 'fire':
      return 'bg-fire-primary';
    case 'water':
      return 'bg-water-primary';
    case 'electric':
      return 'bg-electric-primary';
    case 'grass':
      return 'bg-grass-primary';
    case 'ice':
      return 'bg-ice-primary';
    case 'fighting':
      return 'bg-fighting-primary';
    case 'poison':
      return 'bg-poison-primary';
    case 'ground':
      return 'bg-ground-primary';
    case 'flying':
      return 'bg-flying-primary';
    case 'psychic':
      return 'bg-psychic-primary';
    case 'bug':
      return 'bg-bug-primary';
    case 'rock':
      return 'bg-rock-primary';
    case 'ghost':
      return 'bg-ghost-primary';
    case 'dark':
      return 'bg-dark-primary';
    case 'dragon':
      return 'bg-dragon-primary';
    case 'steel':
      return 'bg-steel-primary';
    case 'fairy':
      return 'bg-fairy-primary';
    default:
      return 'bg-normal-primary';
  }
};
