import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import '@/config/styles/globals.css';
import { cn } from '@/common/utils/cn';
import { UserProvider } from '@/common/providers/user-provider';

const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' });

export const metadata: Metadata = {
  title: 'Pokefy',
  description: 'A Pokedex for the real world.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="overflow-x-hidden">
      <body className={cn(nunito.variable, 'flex items-center justify-center')} suppressHydrationWarning>
        <UserProvider>
          <div className="flex-1 sm:max-w-[30rem]">{children}</div>
        </UserProvider>
      </body>
    </html>
  );
}
