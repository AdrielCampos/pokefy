import Image from 'next/image';
import { PokemonType, PokemonTypes } from '../types/pokedex';
import { cn } from '../utils/cn';
import { handleColor } from '../utils/colors';

export default function Tag({ type }: { type: PokemonType }) {
  return (
    <span
      className={cn(
        'p-1 px-3 text-xs rounded-xl shadow-sm text-white flex items-center justify-center gap-1',
        handleColor(type),
      )}
    >
      <Image
        width={10}
        height={10}
        src={`/${type}.svg`}
        className="drop-shadow-[0px_0px_5px_rgba(60,60,60)] brightness-0 invert"
        alt="type icon"
      />
      <p className="drop-shadow-[0px_0px_5px_rgba(60,60,60)]">{PokemonTypes[type]}</p>
    </span>
  );
}
