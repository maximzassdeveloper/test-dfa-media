import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactQueryClientProvider } from '@/config/reactQuery'
import { Header } from '@/components/widgets/Header/Header'
import './globals.scss'

const ubuntu = Inter({
	subsets: ['cyrillic'],
	variable: '--font-inter',
})

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru' suppressHydrationWarning>
			<body className={ubuntu.variable} suppressHydrationWarning>
				<ReactQueryClientProvider>
					<div>
						<Header />
						{children}
					</div>
				</ReactQueryClientProvider>
			</body>
		</html>
	)
}
