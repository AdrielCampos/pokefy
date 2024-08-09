'use client';
import Image from 'next/image';
import GrayPokeballImage from '/public/gray_pokeball.png';
import GoogleImage from '/public/google.png';
import { loginWithGoogle } from '@/actions/firebase/auth';
import { useRouter } from 'next/navigation';
import { useUserProvider } from '@/common/providers/user-provider';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const { user } = useUserProvider();

  const login = async () => {
    const res = await loginWithGoogle();
    console.log(res);
    if (res.data) {
      router.push('/pokedex');
    }
  };

  useEffect(() => {
    if (user && user !== 'unlogged') {
      router.push('/pokedex');
    }
  }, [user]);

  return (
    <main className="flex min-h-screen flex-col gap-16 items-center justify-center p-24 bg-primary">
      <h1 className="font-bold text-5xl text-white">Pokefy</h1>
      <Image src={GrayPokeballImage} className="brightness-0 invert opacity-60" alt="image pokeball" />
      <button
        className="flex items-center gap-2 p-3 px-4 rounded-lg bg-white text-black font-medium font-nunito"
        onClick={login}
      >
        <Image src={GoogleImage} alt="image google" width={25} />
        Logar com o Google
      </button>
    </main>
  );
}
