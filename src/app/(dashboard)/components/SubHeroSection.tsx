'use client'
import { subHeroCard } from '@/app/constant/home-page'
import Image from 'next/image'
import React from 'react'

const SubHeroSection = () => {
    console.log(subHeroCard);

    return (
        <section className='flex flex-col justify-center items-center gap-y-8 '>
            <h3 className='text-[#3561D2] font-bold text-3xl '>
                Everything for your success
            </h3>
            <p className='text-2xl '>Your guide to academic success and professional growth</p>
            <div className='flex mb-32'>
                {subHeroCard.map((value, index) => (
                    <article className={`bg-amber-100 w-[310px] h-[97px] relative ${Number(index % 2) === 0 ? "" : "top-16"} `} key={index + value.title} >
                        <div>
                            <div className='w-10 h-10 rounded-full '>
                                <Image src={value.image} alt={value.title} height={10} width={10} />
                            </div>
                            <p>{value.title}</p>
                        </div>
                        <div></div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default SubHeroSection
