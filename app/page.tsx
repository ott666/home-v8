'use client'
import HeroSection from '@/components/Sections/HeroSection/HeroSection'
import PerguntasSection from '@/components/Sections/PerguntasSection/PerguntasSection'
import ServicosSection from '@/components/Sections/ServicosSection/ServicosSection'
import SobreSection from '@/components/Sections/SobreSection/SobreSection'
import Image from 'next/image'
import TestimonialsSection from '@/components/Sections/TestimonialsSection/TestimonialsSection'
import FotosSection from '@/components/Sections/FotosSection/FotosSection'
import GoogleMaps from '@/components/GoogleMaps'
import ContactSection from '@/components/Sections/ContactSection/ContactSection'
import { Metadata } from 'next'

export const metadata:Metadata={
  title:"Home Health Ribeirão - Cuidadores de idosos",
  description:"A Home Health Ribeirão é uma empresa de apoio e assistência a pacientes a domicílio, acompanhamento hospitalar e serviços de saúde. Profissionais qualificados e tratamento humanizado.",

}

export default function Home() {
  return (
   <main>
    <HeroSection/>
    <SobreSection/>
    <ServicosSection/>
    <FotosSection/>
    <TestimonialsSection/>
    <PerguntasSection/>
    <GoogleMaps/>
    <ContactSection/>
   </main>
  )
}
