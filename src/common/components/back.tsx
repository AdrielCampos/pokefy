'use client';

import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Back() {
  const router = useRouter();

  return (
    <button onClick={() => router.push('/pokedex')}>
      <ChevronLeft size={24} className="text-gray-100" />
    </button>
  );
}
