import Image from 'next/image';
import Tag from '@/common/components/tag';
import { PokemonType } from '@/common/types/pokedex';
import { cn } from '@/common/utils/cn';
import { handleBackgroundColor } from '@/common/utils/colors';
import Link from 'next/link';

type PokemonProps = {
  id: string;
  name: string;
  url: string;
  types: PokemonType[];
  number: number;
};

export default function Pokemon({ name, url, types, id, number }: PokemonProps) {
  return (
    <Link href={`/pokemon?uid=${id}`}>
      <div
        className={cn(
          'relative cursor-pointer text-left transition-transform hover:scale-105 h-32 flex gap-3 bg-gradient-to-r justify-between rounded-xl shadow-lg',
          handleBackgroundColor(types[0]),
        )}
      >
        <div className="p-4 px-5 text-white flex flex-col justify-center gap-4 relative z-10">
          <div className="flex flex-col">
            <p className="text-xs">#{String(number).padStart(3, '0')}</p>
            <h2 className="font-bold drop-shadow-[0px_0px_5px_rgba(100,100,100)]">{name}</h2>
          </div>
          <div className="flex gap-1">
            {types.map((type) => (
              <Tag key={type} type={type} />
            ))}
          </div>
        </div>
        <Image
          width={120}
          height={120}
          src={url}
          alt="image"
          className="rounded-xl object-cover h-full w-1/3 relative z-10"
        />
      </div>
    </Link>
  );
}
