import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from '@clerk/localizations';
import TopBar from '@/components/shared/TopBar';
import LeftBar from '@/components/shared/LeftBar';
import RightBar from '@/components/shared/RightBar';
import BottomBar from '@/components/shared/BottomBar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Threads',
  description: 'Threads feito com Next.js 13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider localization={ptBR}>
    <html lang="pt-br">
      <body className={inter.className}>
        <TopBar />
        <main>
          <LeftBar />
            <section className="main-container">
              <div className="w-full max-w-4xl">
                {children}
              </div>
            </section>
          <RightBar />
        </main>
        <BottomBar />
        </body>
    </html>
    </ClerkProvider>
  )
}
