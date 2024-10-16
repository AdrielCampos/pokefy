'use client';
import Image from 'next/image';
import GrayPokeballImage from '/public/gray_pokeball.png';
import { useUserProvider } from '@/common/providers/user-provider';
import { useEffect, useState } from 'react';
import { getPokemons } from '@/actions/firebase/firestore';
import Footer from '@/common/components/footer';

export default function Profile() {
  const { user, logout } = useUserProvider();
  const [pokemons, setPokemons] = useState<number>(0);

  useEffect(() => {
    if (!user || user === 'unlogged') return;
    getPokemons({ userId: user.uid }).then(({ data }) => {
      if (data) {
        setPokemons(data.length);
      }
    });
  }, [user]);

  return user && user !== 'unlogged' ? (
    <div className="relative min-h-screen flex flex-col">
      <div className="pt-8 p-6 rounded-b-xl bg-primary overflow-hidden shadow-lg relative z-10">
        <h1 className="text-2xl font-bold text-gray-100">Seu perfil</h1>
        <Image
          className="rotate-45 absolute top-2 right-2 translate-x-1/2 -translate-y-1/2 brightness-0 invert opacity-60"
          alt="pokebola cinza"
          height={250}
          width={250}
          src={GrayPokeballImage}
        />
      </div>
      <div className="flex p-6 pt-4 gap-4 my-4 items-center">
        <div className="h-16 w-16 rounded-full bg-gray-100 outline outline-primary outline-2 outline-offset-2">
          <Image className="rounded-full" alt="pokebola cinza" height={64} width={64} src={user.photoURL || ''} />
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-lg">{user.displayName}</p>
          <p className="text-gray-500">
            <span className="font-bold">{pokemons}</span> Pokemons escaneados
          </p>
        </div>
      </div>
      <button
        className="bg-primary flex self-end text-gray-100 p-2 px-10 rounded-xl shadow-lg hover:shadow-xl transition duration-200"
        onClick={logout}
      >
        Sair
      </button>
      <Footer />
    </div>
  ) : (
    <></>
  );
}
