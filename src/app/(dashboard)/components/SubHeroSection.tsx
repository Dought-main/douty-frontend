'use client'
import { subHeroCard } from '@/app/constant/home-page'
import labels from '@/app/constant/labels'
import Image from 'next/image'
import React from 'react'

const SubHeroSection = () => {
    console.log(subHeroCard);

    return (
        <div className='container flex justify-center items-center  '>
        <p className='text-primary transform rotate-270 origin-top-left hidden md:block '>{labels.features} </p>
        <section className='flex flex-col justify-center items-center  '>
            <h3 className='heading '>
                Everything for your success
            </h3>
            <p className='text-2xl mt-2 mb-14 md:mb-0'>Your guide to academic success and professional growth</p>
            <SubHeroCard/>
        </section>
        </div>
    )
}

export default SubHeroSection


const SubHeroCard =()=>{
    return <div className='grid mb-32 sm:pt-6 mx-2.5 grid-cols-2 md:grid-cols-4'>
                {subHeroCard.map((value, index) => (
                    <article  className={`flex justify-center md:justify-between  flex-col md:flex-row pt-2 md:pt-0 sm:h-24 md:mt-0 ${Number(index % 2) === 0 ? "" : "md:mt-18" } mx-2.5 `} key={index + value.title} >
                        <div className='w-10 h-10 rounded-full bg-[#C3D4FF] flex-center '>
                                <Image src={value.image} alt={value.title} height={10} width={20} />
                        </div>
                        <div className='flex flex-col justify-center items-start space-y-2 w-[85%] '>
                            
                            <p className='sm:text text-xs-base font-[600] text-[#3561D2] '>{value.title}</p>
                            <p className='sm:text text-xs font-[600] text-[#6C757D]  md:w-full '>{value.subText}</p>
                        </div>
                    </article>
                ))}
            </div>
}

