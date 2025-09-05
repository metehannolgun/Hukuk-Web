import React from 'react'
import HeroText from './HeroText'
import HeroImage from './HeroImage'

const Hero = () => {
  return (
   <section className='relative bg-gradient-to-br from-orange-50 to teal-50 py-20'>
    {/*Padding ve max width */}
     <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Grid işlemleri*/}
         <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
            {/* Görsel Bölümü */}
            <HeroImage/>
            {/* Metin Bölümü */}
            <HeroText/>
         </div>
     </div>
   </section>
  )
}

export default Hero