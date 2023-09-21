import React from 'react'

import { register } from 'swiper/element/bundle';

register();

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'

import { Swiper, SwiperSlide } from 'swiper/react';

import CtaServico from '@/components/CtaServico/CtaServico'
import Servicos from "@/data/servicos.json"
import Image from 'next/image'
import Link from 'next/link'
const servicosDestaque = ['acompanhamento', 'cuidadores-de-idosos']




// Import Swiper styles
import 'swiper/css';
import zIndex from '@mui/material/styles/zIndex'

export default function HeroSection(){
    
    const result = Servicos.filter((servico)=>{
        return servicosDestaque.find((a)=>{
            return servico.pseudo === a
        })
    })
    
    return(
        <div className='w-full bg-purple-400 h-[50vh] sm:h-[100vh]  text-white'>

    <Swiper 
    
    className={`w-full h-[50vh] sm:h-full`}  
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={true}
        spaceBetween={0}
        >       
             <SwiperSlide className={`
            
            px-2
                md:px-[50px]   
                lg:px-[75px]
                xl:px-[100px]
                3xl:px-[150px]
            `}>
            
                <div id='mainSlide'
                className={`
                h-full
                flex flex-col lg:flex-row 
                lg:justify-start lg:items-center
                justify-center items-center pt-12 sm:pt-0
               
                
                `}> 
                    <div className='absolute invisible w-[200px] 2xl:visible 2xl:w-[500px] 2xl:h-[500px] 3xl:w-[700px] 3xl:h-[700px] right-14'>
                        <Image src={'/Logo-HH-PNG.png'} alt='logo' style={{objectFit:'cover', zIndex:2}} fill={true}/>
                    </div>
                    <div id='wrapHeroContent' 
                    className={`

                    text-center
                    lg:text-start

                    flex flex-col 
                    justify-center  
                    items-center  
                    z-10 
                        
                    
                        gap-[15px]
                        md:gap-[25px]

                        xl:gap-[15px]
                        3xl:gap-[25px]
                        
                        lg:w-[648px]
                        xl:w-[800px]
                        3xl:w-[980px]

                `}>

                        <h1 id='heroTitle' 
                        className={`

                       
                            text-[22px]
                            sm:text-[44px]
                            xl:text-[52px]
                            3xl:text-[72px]

                        `}> 
                                Serviços hospitalares no conforto da sua casa com a Home & Health Ribeirão.
                        </h1>

                        <p id='paragraphHero' 
                        className={`
                        font-extralight
                        
                            
                            text-[14px] 
                               
                                sm:text-[28px]
                                lg:text-[18px] 
                                xl:text-[24px]
                                3xl:text-[28px] 
                        `}>
                            Entendemos que cada pessoa é única, por isso adaptamos nossos cuidados para atender às necessidades individuais.
                        </p>

                        <div 
                        id='wrapButtonsHero'
                        className={`
                        w-full
                        items-center 
                            justify-center
                            sm:justify-around 
                            lg:justify-start 

                                gap-8
                                lg:gap-[15px]
                                xl:gap-[25px]
                                3xl:gap-[40px]
                        flex 
                            
                                
                            
                        `}>
                            <Link href={'/servicos'} 
                            className={`
                            rounded-3xl
                            text-center 
                            bg-purple-500
                            hover:bg-white
                            hover:text-black
                            duration-700
                                text-[14px]
                                    sm:text-3xl 
                                    md:text-[30px]
                                    lg:text-[22px]
                                    xl:text-[24px]
                                    3xl:text-[30px]
                               
                                

                                
                                px-[22px]
                                    md:px-[55px]
                                    lg:px-[30px]
                                    3xl:px-[70px]
                                py-1 
                                    lg:py-[3px]
                                    xl:py-[5px]
                                    3xl:py-[10px] 
                            
                            `}>
                                Serviços
                            </Link>
                            
                            <Link href={'/contato'} 
                            className={`
                            text-center
                            hover:bg-purple-500
                            hover:text-white
                            hover:border-purple-500
                            duration-700
                           
                            
                            bg-transparent
                            rounded-3xl

                            border
                                3xl:border-2
                            
                            border-white 

                                text-[14px]
                                    sm:text-3xl 
                                    lg:text-[22px]
                                    xl:text-[24px]
                                    3xl:text-[30px]
                               
                               
                                
                                
                                px-[22px]
                                    md:px-[55px]
                                    lg:px-[30px]
                                    3xl:px-[70px]
                                py-1
                                    lg:py:-[3px] 
                                    xl:py-[5px]
                                    3xl:py-[8px] 
                            
                            `}>
                                Contato
                            </Link>
                        </div>
                       
                    </div>

                </div>
                <div id='filterimg' className='bg-black/60 w-full inset-0 h-full absolute'>
                <Image 
                   style={{
                    objectFit:'cover',
                    zIndex:'-2'
                   }}
                   src={`/services/consulta/img2.png`} fill={true} alt='bg'/>
                </div>
            </SwiperSlide>
       {result.map((servico)=>(
                <SwiperSlide className='w-full h-[80%] pt-12 sm:pt-0' key={servico.id}>
                   <CtaServico servico={servico} />
                </SwiperSlide>
             ))}
       
        </Swiper>
        
        </div>
    )
}