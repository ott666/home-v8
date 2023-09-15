import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans_Mayan_Numerals, Noto_Sans_Myanmar, Noto_Serif_Myanmar } from 'next/font/google'
import  NavBar  from '@/components/Navbar/Navbar'
const Myanmar = Noto_Sans_Mayan_Numerals({ subsets: ['mayan-numerals'], weight:['400'] })
import Footer from '@/components/Footer/Footer'
import { WhatsappButton } from '@/components/WhatsappButton'
export const metadata: Metadata = {
  title: 'Home Health Ribeirão - Cuidadores de Idosos',
  description: 'A Home Health Ribeirão é uma empresa de apoio e assistência a pacientes a domicílio, acompanhamento hospitalar e serviços de saúde. Profissionais qualificados e tratamento humanizado.',
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
        <WhatsappButton/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
