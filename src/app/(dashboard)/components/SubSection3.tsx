import { userJourneyCard, whyChooseUs } from '@/app/constant/home-page'
import check from '../../../../public/check.png'

import Image from 'next/image'
import React from 'react'

const SubSection3 = () => {
  return (
    <div className='flex justify-center items-center mt-2'>
        <p className='text-primary transform rotate-270 origin-top-left hidden sm:block  '>How It Works</p>
      <div className='flex-center flex-col mt-8 mb-3'>
                <h1 className='heading'>
                    Your Learning Journey Starts Here
                </h1>
                <p className='text-2xl mb-12 '> Dive in with these simple steps and make the most of Doutly.</p>
                 <UserJourney/>
                <div className='flex-center flex-col mt-8 mb-3'>
                    <h2 className='heading'>Why Choose Doutly?</h2>
                    <p className='text-2xl pb-6'>Unlock the best learning experience with Doutly! Here’s why you’ll love it:</p>
                    <div className='flex-center flex-wrap space-x-20' >
                        {whyChooseUs.map((item)=>(
                            <div key={item.text} className='flex items-center  space-x-2 mb-12'>
                                <div className='w-2.5 h-2.5 bg-primary rounded-full'></div>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    </div>
  )
}

export default SubSection3

const UserJourney=()=>{
    return <div className='flex flex-wrap justify-center space-x-30'>
                    {userJourneyCard.map((item, index)=>(
                        <div className='flex items-baseline justify-evenly  bg-gradient-to-b from-[#C3D4FF] to-[#FBFBFB] rounded-3xl ' key={
                            item.title+index
                        }> 
                            <div className='flex flex-col w-[75%] pt-3' > 
                                
                                <div className='flex items-baseline'>
                                    <p className='text-4xl base-color font-medium pr-2'>{item.number}</p>
                                    <p className='font-bold text-2xl '>{item.title}</p>
                                </div>
                                    <p className=' text-base'>{item.subText}</p>
                            </div>
                            <div className=''>
                                <Image src={check} alt='check' height={10} width={30}/>        

                            </div>
                        </div>

                    ))}
                </div>
}