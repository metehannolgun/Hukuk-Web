import React from 'react'
import Card from './Card';

const Features = () => {
    const cards = [
        {
            logo: '/assets/justice.svg',
            title: 'Adalet ve Güven'
        },
        {
            logo: '/assets/consulting.svg',
            title: 'Uzman Danışmanlık'
        },
        {
            logo: '/assets/contract.svg',
            title: 'Sözleşme Hizmetleri'
        },
        {
            logo: '/assets/litigation.svg',
            title: 'Dava Takibi'
        },
        {
            logo: '/assets/family.svg',
            title: 'Aile Hukuku'
        },
        {
            logo: '/assets/corporate.svg',
            title: 'Şirket Hukuku'
        }
    ];
  return (
    <section className='bg-gradient-to-b from-slate-300 to-slate-50 py-20 '>
        <div className='flex justify-center font-serif  text-3xl mx-auto sm:px-6 lg:px-8 leading-relaxed text-center '>
            <span>7 yıldan fazladır insanlara hukuki problemlerini
                çözmelerinde yardımcı oluyoruz
            </span>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4'>
            {cards.map((card, idx) => (
                <Card key={idx} logo={card.logo} title={card.title} />
            ))}
        </div>
    </section>
  )
}

export default Features