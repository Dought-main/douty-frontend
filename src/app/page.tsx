import React from 'react'
import HeroSection from './(dashboard)/components/HeroSection'
import SubHeroSection from './(dashboard)/components/SubHeroSection'
import SubSection3 from './(dashboard)/components/SubSection3'

const page = () => {
  return (
    <div className='px-4 md:px-0'>
      <HeroSection />
      <SubHeroSection />
      <SubSection3/>
    </div>
  )
}

export default page