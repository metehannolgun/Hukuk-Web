import React from 'react'



interface CardProps {
    logo: string;
    title: string;
    
}

const Card = ({logo, title, }:CardProps) => {
  return (
    <div className='block rounded-md bg-white shadow-xl text-center bg-gradient-to-b from-stone-100 to-stone-50'>
       {/* Card Image*/}
        {logo && (
            <div className='flex justify-center '>
                <img src={logo} alt={title} className='h-16 w-16 object-contain' />
            </div>
        )}
    </div>
  )
}

export default Card