import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import NextTopLoader from 'nextjs-toploader';

const poppins = Poppins({
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Clone Airbnb',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextTopLoader 
          color='#F3595E'
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
