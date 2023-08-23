import Container from '@/components/Container/Container'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SobreSection = () => {
  return (
    <section id='sobre' className='pt-5'>
        <Container>
            <div className='flex flex-col'>
            <div id='rowdecima' className={`
            flex flex-col py-10 items-start
            `}>
            <span className='italic py-5 text-lg'>Explorando Nossa Jornada e Compromisso de Qualidade.</span>
            <h1 className='text-3xl font-bold max-w-xl'>{"Descubra Nossa História e Compromisso de Excelência"
}</h1>
            </div>
            <div id='wrapSobre'
            className={`
            flex flex-col md:flex-row
            md:gap-5 lg:gap-14 gap-14 
            md:justify-start
            
            justify-start
            `}> <div className='flex'>
                <div id='div_1' 
                className={`
                pb-32
                w-[200px] md:w-[150px] 3xl:w-[200px]
                justify-center
                items-center
                h-fit
                flex flex-col`}>
                    
                    <span id='textoAnos'
                    className='
                    text-center
                    font-thin
                    text-[98px]
                    '>
                        X?
                    </span>
                    <span id='textoExperiencia'
                    className={`
                    text-xl
                    text-start w-full pb-3
                    font-bold
                    `}>
                        Anos de experiência
                    </span>                 

                    <p id='paragraphDiv1'
                    className={`
                    text-sm`}>
                       Há mais de x anos, a Home Health Ribeirão oferece cuidados domiciliares com expertise e comprometimento.
                    </p>
                    
                </div>
                <div className={'relative w-[400px] md:invisible md:absolute h-[400px]'}>
                    <Image src={'/services/acompanhamento/img1.png'} style={{objectFit:'cover'}} fill={true} alt='bg'/>
                    </div>
                </div>
                 <div id='div_2'
                className=' min-w-[300px] min-h-[400px] order-1 md:-order-none lg:min-w-[400px] lg:h-[600px] relative -mb-14 rounded-3xl overflow-hidden shadow-black shadow-lg'>
                    <Image src="/services/internacao/img2.png" alt='img' style={{objectFit:'cover'}} fill={true}/>
                </div>
                <div id='div_3'
                className={`
                flex flex-col 
                max-w-[500px]
                gap-10
                h-fit
                `}>
                    <p className={`font-bold`}>A Home Health Ribeirão é uma empresa de apoio e assistência a pacientes a domicílio, fundada em 2015 pela Diretora de Serviços de Saúde, Francine Florindo.
                    </p>
                    <p>Atendemos mais de 2.000 vidas em diversas cidades da região, incluindo Ribeirão Preto, Sertãozinho e Bebedouro. Nossa missão é priorizar a segurança e o bem-estar dos pacientes, oferecendo serviços abrangentes que vão desde cuidadores de idosos até terapeutas especializados.</p>

                    <Link href={'/sobre'} className='bg-purple-500 py-3 w-[200px] duration-700 hover:shadow-black hover:shadow-xl  hover:-translate-y-2 text-center rounded-3xl text-xl font-bold text-white'>Saiba mais</Link>
                </div>
            </div>

            </div>
        </Container>

    </section>
  )
}

export default SobreSection