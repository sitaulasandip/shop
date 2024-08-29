import Link from 'next/link'
import React from 'react'
import { FiShoppingBag } from 'react-icons/fi'

const Navbar = () => {
  return (
    <div className='w-full h-[80px] bg-white border-b'>
      <div className='container mx-auto h-full flex justify-between items-center px-6'>
        <Link href='/' className='text-3xl font-bold'>Urban Bazaar</Link>
        
        <div className='flex items-center space-x-8'>
          <nav className='flex space-x-8'>
            <Link href='/' className='font-medium'>HOME</Link>
            <Link href='/shop' className='font-medium'>SHOP</Link>
            <Link href='/features' className='font-medium'>FEATURES</Link>
            <Link href='/contact' className='font-medium'>CONTACT</Link>
          </nav>

          <div className='flex items-center space-x-6'>
            <div className='relative'>
              <FiShoppingBag className='text-2xl'/>
              <span className='absolute text-[12px] top-0 right-[-5px] bg-red-500 w-[18px] h-[18px] rounded-full text-center text-white font-bold'>0</span>
            </div>
            <button className='px-5 py-2 border-2 border-black text-sm font-medium'>LOGIN</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
