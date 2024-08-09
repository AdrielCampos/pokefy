import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/common/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        grass: {
          primary: 'var(--color-grass-primary)',
          secondary: 'var(--color-grass-secondary)',
          tertiary: 'var(--color-grass-tertiary)',
        },
        fire: {
          primary: 'var(--color-fire-primary)',
          secondary: 'var(--color-fire-secondary)',
          tertiary: 'var(--color-fire-tertiary)',
        },
        water: {
          primary: 'var(--color-water-primary)',
          secondary: 'var(--color-water-secondary)',
          tertiary: 'var(--color-water-tertiary)',
        },
        bug: {
          primary: 'var(--color-bug-primary)',
          secondary: 'var(--color-bug-secondary)',
          tertiary: 'var(--color-bug-tertiary)',
        },
        normal: {
          primary: 'var(--color-normal-primary)',
          secondary: 'var(--color-normal-secondary)',
          tertiary: 'var(--color-normal-tertiary)',
        },
        poison: {
          primary: 'var(--color-poison-primary)',
          secondary: 'var(--color-poison-secondary)',
          tertiary: 'var(--color-poison-tertiary)',
        },
        electric: {
          primary: 'var(--color-electric-primary)',
          secondary: 'var(--color-electric-secondary)',
          tertiary: 'var(--color-electric-tertiary)',
        },
        ground: {
          primary: 'var(--color-ground-primary)',
          secondary: 'var(--color-ground-secondary)',
          tertiary: 'var(--color-ground-tertiary)',
        },
        fairy: {
          primary: 'var(--color-fairy-primary)',
          secondary: 'var(--color-fairy-secondary)',
          tertiary: 'var(--color-fairy-tertiary)',
        },
        fighting: {
          primary: 'var(--color-fighting-primary)',
          secondary: 'var(--color-fighting-secondary)',
          tertiary: 'var(--color-fighting-tertiary)',
        },
        psychic: {
          primary: 'var(--color-psychic-primary)',
          secondary: 'var(--color-psychic-secondary)',
          tertiary: 'var(--color-psychic-tertiary)',
        },
        rock: {
          primary: 'var(--color-rock-primary)',
          secondary: 'var(--color-rock-secondary)',
          tertiary: 'var(--color-rock-tertiary)',
        },
        ghost: {
          primary: 'var(--color-ghost-primary)',
          secondary: 'var(--color-ghost-secondary)',
          tertiary: 'var(--color-ghost-tertiary)',
        },
        ice: {
          primary: 'var(--color-ice-primary)',
          secondary: 'var(--color-ice-secondary)',
          tertiary: 'var(--color-ice-tertiary)',
        },
        dragon: {
          primary: 'var(--color-dragon-primary)',
          secondary: 'var(--color-dragon-secondary)',
          tertiary: 'var(--color-dragon-tertiary)',
        },
        dark: {
          primary: 'var(--color-dark-primary)',
          secondary: 'var(--color-dark-secondary)',
          tertiary: 'var(--color-dark-tertiary)',
        },
        steel: {
          primary: 'var(--color-steel-primary)',
          secondary: 'var(--color-steel-secondary)',
          tertiary: 'var(--color-steel-tertiary)',
        },
        flying: {
          primary: 'var(--color-flying-primary)',
          secondary: 'var(--color-flying-secondary)',
          tertiary: 'var(--color-flying-tertiary)',
        },
      },
      boxShadow: {
        'inner-lg': 'inset 0 0 10px rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        nunito: ['var(--font-nunito)', 'sans-serif'],
      },
    },
    fontFamily: {
      nunito: ['var(--font-nunito)', 'sans-serif'],
    },
  },
  plugins: [],
};
export default config;
