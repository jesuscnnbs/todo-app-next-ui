import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {Providers} from "./providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nextjs Todo App',
  description: 'Simple todo app with fake api',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
