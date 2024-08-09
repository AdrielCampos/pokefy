'use client';
import Image from 'next/image';
import Tag from '@/common/components/tag';
import GrayPokeballImage from '/public/gray_pokeball.png';
import { PokedexEntry } from '@/common/types/pokedex';
import Back from '../../common/components/back';
import { StatusIcons, StatusLabels, StatusOrder } from '@/common/types/status';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { getPokemon } from '@/actions/firebase/firestore';
import { useUserProvider } from '@/common/providers/user-provider';

function sortObjectByKeys(order: string[], obj: { [key: string]: any }): { [key: string]: any } {
  const sortedObj: { [key: string]: any } = {};

  for (const key of order) {
    if (key in obj) {
      sortedObj[key] = obj[key];
    }
  }

  return sortedObj;
}

export default function Pokemon() {
  const { user } = useUserProvider();
  const [pkmn, setPkmn] = useState<PokedexEntry>();
  const searchParams = useSearchParams();
  const pokemonUid = searchParams.get('uid');

  const sortedPokemon = useMemo(() => {
    if (!pkmn) return {};
    const sorted = sortObjectByKeys(StatusOrder, pkmn);
    return sorted;
  }, [pkmn]);

  useEffect(() => {
    if (!pokemonUid) return;
    if (!user || user === 'unlogged') return;
    getPokemon({ userId: user.uid, pokemonId: pokemonUid }).then((res) => {
      if (res.data) {
        setPkmn(res.data);
      } else {
        console.error(res.error);
      }
    });
  }, [pokemonUid, user]);

  return pkmn ? (
    <div className="overflow-x-hidden">
      <div className="pt-8 p-6 rounded-b-xl bg-primary overflow-hidden shadow-lg -mb-2 relative z-10">
        <Back />
        <Image
          className="rotate-45 absolute top-2 right-2 translate-x-1/2 -translate-y-1/2 brightness-0 invert opacity-60"
          alt="pokebola cinza"
          height={250}
          width={250}
          src={GrayPokeballImage}
        />
      </div>
      <Image
        src={pkmn.image}
        alt="dog"
        width={515}
        height={515}
        className="w-full h-[30rem] object-cover object-center"
      />
      <div className="p-6 rounded-xl -translate-y-6 bg-white">
        <Image
          width={100}
          height={100}
          src={`/${pkmn.pokemonType[0]}.svg`}
          alt="image"
          className="w-full p-3 absolute opacity-30 translate-x-1/2 right-0"
        />
        <div className="flex flex-col gap-6 relative z-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-center mt-2">{pkmn.name}</h1>
            <div className="flex gap-1 items-center justify-center">
              {pkmn.pokemonType.map((type) => (
                <Tag key={type} type={type} />
              ))}
            </div>
          </div>
          <p className="text-center">{pkmn.description}</p>
          {Object.entries(sortedPokemon).map(([key, value]) => {
            const icon = StatusIcons[key];
            return (
              icon && (
                <div key={key} className="flex gap-2 items-center">
                  {StatusIcons[key as keyof typeof StatusIcons]}
                  <span className="font-bold">{StatusLabels[key as keyof typeof StatusLabels]}:</span>
                  <span className="capitalize">{value as string}</span>
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  ) : (
    <div className="h-screen flex justify-center items-center">
      <p>Carregando...</p>
    </div>
  );
}
