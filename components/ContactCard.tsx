import Image from 'next/image'
import React from 'react'

interface PropsContact{
    title:string
    l1:string
    l2:string
    icon:string
}
export const ContactCard = (props:PropsContact) => {
 
    return (
    <div className={`flex bg-purple-500 py-5 px-5 gap-2 w-full text-white text-sm rounded-3xl`}>

        <div id='wrapimg' className='relative w-[50px] h-[50px]'>
            <Image alt='img' src={`/icons/${props.icon}.svg`}  fill={true} style={{objectFit:'cover'}}/>
        </div>

        <div className='flex flex-col'>
            <h2 className='text-lg'>
                {props.title}
                
                </h2>
                <p>{props.l1}</p>
                <p>{props.l2}</p>
        </div>
    </div>
    
  )
}
