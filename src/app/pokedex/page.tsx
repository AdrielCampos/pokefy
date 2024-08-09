'use client';
import Image from 'next/image';
import GrayPokeballImage from '/public/gray_pokeball.png';
import { Search } from 'lucide-react';
import Pokemon from './components/pokemon';
import Footer from '@/common/components/footer';
import { useEffect, useState } from 'react';
import { PokedexEntry } from '@/common/types/pokedex';
import { getPokemons } from '@/actions/firebase/firestore';
import { useUserProvider } from '@/common/providers/user-provider';

export default function Pokedex() {
  const { user } = useUserProvider();
  const [pokemons, setPokemons] = useState<PokedexEntry[]>([]);

  useEffect(() => {
    if (!user || user === 'unlogged') return;
    getPokemons({ userId: user.uid }).then(({ data }) => {
      if (data) {
        setPokemons(data);
      }
    });
  }, [user]);

  return (
    <main className="flex min-h-screen flex-col gap-2 relative max-w-screen overflow-x-hidden">
      <div className="pt-8 p-6 rounded-b-xl bg-primary overflow-hidden shadow-lg">
        <h1 className="text-2xl font-bold text-gray-100">Sua Pokefy</h1>
        <Image
          className="rotate-45 absolute top-2 right-2 translate-x-1/2 -translate-y-1/2 brightness-0 invert opacity-60"
          alt="pokebola cinza"
          height={250}
          width={250}
          src={GrayPokeballImage}
        />
        <div className="bg-gray-100 text-gray-900 rounded-2xl mt-4 flex items-center p-3 px-5 gap-3 relative z-10 shadow-lg">
          <Search size={18} className="text-gray-600" />
          <input
            className="rounded-lg font-medium bg-transparent w-full h-full focus:outline-none"
            type="text"
            placeholder="Pesquisar"
            maxLength={50}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6 pt-4 flex-1">
        {pokemons.map((pokemon) => (
          <Pokemon
            key={pokemon.id}
            id={pokemon.id}
            url={pokemon.image}
            name={pokemon.name}
            types={pokemon.pokemonType}
          />
        ))}
        {pokemons.length === 0 && (
          <div className="flex flex-1 items-center justify-center">
            <p>Nenhum item escaneado</p>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
