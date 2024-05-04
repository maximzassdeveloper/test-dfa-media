import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { StoreProvider } from '@/libs/store/StoreProvider'
import { ReactQueryProvider } from '@/libs/reactQuery'
import { Layout } from '@/components/Layout'
import './globals.scss'

const ubuntu = Inter({
  subsets: ['cyrillic'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Фильмы',
  description: '',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='ru' suppressHydrationWarning>
      <body className={ubuntu.variable} suppressHydrationWarning>
        <StoreProvider>
          <ReactQueryProvider>
            <Layout>{children}</Layout>
          </ReactQueryProvider>
        </StoreProvider>
      </body>
    </html>
  )
}
