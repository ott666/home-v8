'use client'
import { ContactCard } from '@/components/ContactCard'
import Container from '@/components/Container/Container'
import React from 'react'
import Form2 from '@/components/Form2'
function ContactSection() {
  return (
    <section className='py-10'>
    <Container>
        <div className='flex flex-col lg:flex-row justify-between gap-1'>
        <ContactCard icon='location' title='Endereço' l1='Rangel Pestana, 547' l2='Ribeirão Preto, SP 14030-210'/>
        <ContactCard icon='mail' title='E-mail' l1='administrativo@homehealthribeirao.com.br' l2=' '/>
        <ContactCard icon='phone' title='Telefones' l1='(16) 3911-4777' l2='(16) 99170-6391'/>
            

        </div>
        <div id='wraprow2' className=' mt-10 bg-gray-300 shadow-black shadow-lg w-[80%] flex flex-col justify-center gap-5  mx-auto px-2 py-5 lg:px-14 h-fit lg:h-[370px]'>
            <Form2/>
        </div>
      
    </Container>
    </section>
    )
}

export default ContactSection