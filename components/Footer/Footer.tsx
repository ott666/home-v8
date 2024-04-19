import React from 'react'
import Container from '../Container/Container'
import Image from 'next/image'
function Footer() {
  return (
    <div className='w-full  items-start pt-16 justify-center relative h-[40vh] flex'>
    <Container>
    <h1 className='text-3xl text-white font-bold text-center '>Home Health Ribeirão Preto</h1>
    <p className='text-lg pt-2 text-white'>Cuide do seu ente querido com carinho e profissionalismo. Contrate um cuidador de idosos hoje mesmo!
    <div className='mx-auto bg-black/30 backdrop-blur-[5px] w-fit px-5 py-3 rounded-[15px] mt-8'>
      <h1 className='text-[18px]'>
       CNPJ: 27.588.673/0001-60
      </h1>
</div>
</p> 
   

    </Container>

    <div className='absolute inset-0 bg-black/50 z-[-2]'/>
    
    <Image src={'/services/cuidadores/img2.png'} fill={true} alt='bg-footer' style={{objectFit:'cover',zIndex:-3}}/> 

    

    </div>


    
  )
}

export default Footer