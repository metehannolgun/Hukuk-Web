import React from 'react'

const HeroText = () => {
  return (
    <div>
  <h1 className='text-4xl md:text-5xl font-bold mb-6'>
  Hukukta Güvenin Adresi
   <span className='block text-orange-500'>Uzman Kadro, Etkin Çözümler</span>
  </h1>
  <p className='text-gray-600 mb-8 text-xl leading-relaxed'>
  Alanında uzman avukatlarımız ile bireysel ve kurumsal hukuki ihtiyaçlarınıza profesyonel çözümler sunuyoruz. 
  Adaletin sağlanması ve haklarınızın korunması için yanınızdayız.
  </p>
        {/* Butonlar için esnek konteyner , sm ve üstünde flex-row(yan yana) */}
        <div className='flex flex-col sm:flex-row gap-4'>
            <a
            className='bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-center ' 
            href='/iletişim'>Randevu Al
            </a>
            <a
             className='bg-white text-orange-600 border-2 border-orange-600  px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors text-center ' 
             href='tel:+905xxxxxxxxx'>Bizi Ara
             </a>
        </div>
    </div>
  )
}

export default HeroText