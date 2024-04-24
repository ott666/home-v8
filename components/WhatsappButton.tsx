import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const WhatsappButton = () => {
  return (
    <Link className='fixed bottom-10  group sm-right-10 right-5  z-50 hover:shadow-xl hover:shadow-black w-16 h-16 sm:w-32 sm:h-32  rounded-full hover:scale-110 duration-700 hover:-translate-y-10  overflow-visible '
    href={'https://wa.me/551639114777?text=Ol%C3%A1%21+Estava+vendo+o+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es.'}>
        <Image
        src={'/icons/whatsapp.svg'}
        fill
        alt='whatsapp logo'
       
        style={{objectFit:'cover'}}
        ></Image>
    </Link>

  )
}
