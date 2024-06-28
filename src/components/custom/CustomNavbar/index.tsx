import React from 'react'
import { ChevronLeft, ShoppingCart } from 'lucide-react';
import { useLocation } from "wouter";


const CSNav = () => {
  const [ location, setLocation ] = useLocation();

  return (
    <header className='flex gap-2 justify-between m-auto p-3'>
      <section className='flex gap-2 cursor-pointer'>
        <ChevronLeft color="#067f1a" className='block md:hidden' />
        <p className='text-green-700 text-xl md:text-3xl '>Atras</p>
      </section>
      <p className='text-yellow-300 text-2xl md:text-5xl cursor-pointer' onClick={() => setLocation( "/" )}>
        Little <span className='text-green-700 text-2xl md:text-5xl'>Lemmon</span>
      </p>
      <div className='flex gap-1'>
        <ShoppingCart color="#067f1a" className='text-2xl md:text-5xl' />
      </div>
    </header>
  )
}

export default CSNav
