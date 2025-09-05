import React, { useState } from 'react'
import { Menu, Scale, X } from 'lucide-react';

const Header = () => {
    const navigation = [
        {
            name: "Anasayfa",
            href: "/"
        },
        {
            name: "Hakkımızda",
            href: "/about"
        },
        {
            name: "Hizmetler",
            href: "/services"
        },
        {
            name: "İletişim",
            href: "/contact"
        }
    ];
    const [isOpen, setisOpen] = useState(false)
  return (
    <header className='bg-slate-900  sticky top-0 z-50 shadow-lg  '>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            {/* Logo ve metin yerleşimi*/}
        <div className='flex justify-between items-center py-4'>
            {/* Logo and Text Section */}
            <a href='/' className='flex items-center gap-3'>
                <div className=' p-3 rounded-full '>
                    <Scale color='white' size={'35px'} />
                </div>
                <span className='text-white'>Law</span>
            </a>
            {/* Desktop Nav */}
            <nav className='space-x-8 hidden md:flex '>
                {navigation.map((item)=> (
                    <a key={item.href} 
                                href={item.href}
                                //buton style
                                className='px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-gray-700 hover:text-white hover:bg-gray-700'
                            >
                                {item.name}
                            </a>
                ))}
            </nav>
            {/* Burger Button*/}
            <button
                 onClick={()=> setisOpen(!isOpen)} 
                 className='p-2 rounded-md text-gray-700 hover:text-white-600 hover:bg-white cursor-pointer md:hidden'
                 >
                    {isOpen ? <X/> : <Menu/>}
            </button>
        </div>
        {/* Mobil Nav Logic*/}
          {isOpen && (
            <div className='md:hidden'>
                <div className='px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200'>
                    {navigation.map((item) => (
                            <a key={item.href} 
                                href={item.href}
                                //buton style
                                className='block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-gray-700 hover:text-orange-600 hover:bg-orange50'
                            >
                                {item.name}
                            </a>
                        ))}
                </div>
            </div>
          )}
        </div>
    </header>
  );
}

export default Header