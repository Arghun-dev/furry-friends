import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import ModalProvider from '@/context/ModalContext';
import PageHeader from '@/components/PageHeader';
import ModalRoot from '@/components/ModalRoot/ModalRoot';

import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Furry Friends',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'mb-8 h-full w-full bg-background font-sans antialiased',
          inter.variable
        )}
      >
        <ModalProvider>
          <div className='container'>
            <PageHeader />
            {children}
            <div className='hidden'>
              <ModalRoot />
            </div>
          </div>
        </ModalProvider>
      </body>
    </html>
  );
}
