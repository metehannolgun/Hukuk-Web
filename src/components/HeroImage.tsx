import React from 'react'

const HeroImage = () => {
  return (
    <div className='relative'>
        {/* Görsel */}
        <img src='https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=500' 
        alt='Hero' 
        className='rounded-lg shadow-xl'>
        </img>
    </div>
  )
}

export default HeroImage