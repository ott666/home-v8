import Image from 'next/image'
import React from 'react'

function BreadCrumbServicos(props:any) {
  return (
    <div className='flex h-[60vh] relative items-center justify-center '>
      <div className='absolute inset-0 bg-black/50'>
      </div>
        <Image style= {{objectFit:'cover', zIndex:-1}}src={`/services/${props.Servico.pastaFotos}/img1.png`} alt='fundo' fill={true}/>
        <h1 className='text-center text-3xl sm:text-5xl z-[5] text-white font-bold'>{props.Servico.title}</h1>
    
    </div>
    
  )
}

export default BreadCrumbServicos