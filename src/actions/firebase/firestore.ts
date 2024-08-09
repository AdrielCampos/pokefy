'use server';
import { PokedexEntry } from '@/common/types/pokedex';
import { firestore } from '@/config/firebase';
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';

export async function uploadPokemon({
  data,
  userId,
}: {
  data: PokedexEntry;
  userId: string;
}): Promise<{ data?: string; error?: string }> {
  try {
    const ref = data.name.toLocaleLowerCase().replace(/[^a-z0-9]/g, '');
    const docRef = await getDoc(doc(firestore, userId, ref));
    if (docRef.exists()) {
      return { data: ref };
    }
    await setDoc(doc(firestore, userId, ref), data);
    return { data: ref };
  } catch (error) {
    return { error: JSON.stringify(error) };
  }
}

export async function getPokemon({
  userId,
  pokemonId,
}: {
  userId: string;
  pokemonId: string;
}): Promise<{ data?: PokedexEntry; error?: string }> {
  try {
    const response = await getDoc(doc(firestore, userId, pokemonId));
    if (!response.exists()) {
      throw new Error('No such document!');
    }
    return { data: response.data() as PokedexEntry };
  } catch (error) {
    return { error: JSON.stringify(error) };
  }
}

export async function getPokemons({ userId }: { userId: string }): Promise<{ data?: PokedexEntry[]; error?: string }> {
  try {
    const response = await getDocs(collection(firestore, userId));
    const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id } as PokedexEntry));
    return { data };
  } catch (error) {
    return { error: JSON.stringify(error) };
  }
}
