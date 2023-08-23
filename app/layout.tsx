import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans_Mayan_Numerals, Noto_Sans_Myanmar, Noto_Serif_Myanmar } from 'next/font/google'
import  NavBar  from '@/components/Navbar/Navbar'
const Myanmar = Noto_Sans_Mayan_Numerals({ subsets: ['mayan-numerals'], weight:['400'] })
import Footer from '@/components/Footer/Footer'
export const metadata: Metadata = {
  title: 'Home Health Ribeirão',
  description: 'Cuidadores de idosos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={Myanmar.className}>
        <NavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
