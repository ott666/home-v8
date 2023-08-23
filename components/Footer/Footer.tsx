import React from 'react'
import Container from '../Container/Container'
import Image from 'next/image'
function Footer() {
  return (
    <div className='w-full  items-start pt-16 justify-center relative h-[40vh] flex'>
    <Container>
    <h1 className='text-3xl text-white font-bold text-center '>Home Health Ribeirão Preto</h1>
    <p className='text-lg pt-2 text-white'>Cuide do seu ente querido com carinho e profissionalismo. Contrate um cuidador de idosos hoje mesmo!
</p> 
   

    </Container>

    <div className='absolute inset-0 bg-black/50 z-[-2]'/>

    <Image src={'/services/cuidadores/img2.png'} fill={true} alt='bg-footer' style={{objectFit:'cover',zIndex:-3}}/> 

    

    </div>


    
  )
}

export default Footer