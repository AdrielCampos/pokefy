'use client';
import { BookOpen, Camera, User } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { cn } from '../utils/cn';

export default function Footer() {
  const [isActive, setIsActive] = useState('/');

  useEffect(() => {
    setIsActive(window?.location?.pathname);
  }, []);

  const Component = ({ className }: { className?: string }) => {
    return (
      <div
        className={cn(
          'shadow-lg flex bg-white justify-center items-center p-2 gap-2 w-full bottom-0 left-0 rounded-t-xl z-50',
          className,
        )}
      >
        <Link
          href="/camera"
          className={cn('p-4 px-8 rounded-3xl', isActive === '/camera' ? 'bg-primary text-white' : 'text-gray-500')}
        >
          <Camera size={24} />
        </Link>
        <Link
          href="/pokedex"
          className={cn('p-4 px-8 rounded-3xl', isActive === '/pokedex' ? 'bg-primary text-white' : 'text-gray-500')}
        >
          <BookOpen size={24} />
        </Link>
        <Link
          href="/profile"
          className={cn('p-4 px-8 rounded-3xl', isActive === '/profile' ? 'bg-primary text-white' : 'text-gray-500')}
        >
          <User size={24} />
        </Link>
      </div>
    );
  };

  return (
    <>
      <Component className="fixed" />
      <Component className="opacity-0" />
    </>
  );
}
