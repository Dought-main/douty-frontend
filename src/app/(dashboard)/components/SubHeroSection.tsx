'use client'
import { subHeroCard } from '@/app/constant/home-page'
import Image from 'next/image'
import React from 'react'

const SubHeroSection = () => {
    console.log(subHeroCard);

    return (
        <div className='flex justify-center items-center mt-2'>
        <p className='text-primary transform rotate-270 origin-top-left '>Features </p>
        <section className='flex flex-col justify-center items-center  '>
            <h3 className='heading '>
                Everything for your success
            </h3>
            <p className='text-2xl mt-2'>Your guide to academic success and professional growth</p>
            <SubHeroCard/>
        </section>
        </div>
    )
}

export default SubHeroSection


const SubHeroCard =()=>{
    return <div className='flex mb-32 mt-6 mx-2.5 flex-wrap items-center justify-center'>
                {subHeroCard.map((value, index) => (
                    <article  className={`flex justify-between  w-[310px] h-[97px] relative ${Number(index % 2) === 0 ? "" : "top-16" } mx-2.5 `} key={index + value.title} >
                        <div className='w-10 h-10 rounded-full bg-[#C3D4FF] flex-center '>
                                <Image src={value.image} alt={value.title} height={10} width={20} />
                        </div>
                        <div className='flex flex-col justify-center items-start space-y-2 w-[85%] '>
                            
                            <p className='text-base font-[600] text-[#3561D2]'>{value.title}</p>
                            <p className='text-base font-[600] text-[#6C757D]'>{value.subText}</p>
                        </div>
                    </article>
                ))}
            </div>
}

