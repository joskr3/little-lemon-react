import { Menu, ShoppingCart } from 'lucide-react'
import { useLocation } from "wouter";

import React from 'react'

const NavBar = () => {
  const [ location, setLocation ] = useLocation();

  return (
    <header className='flex gap-2 justify-between m-auto p-3'>
      <section>
        <Menu color="#067f1a" className='block md:hidden' />
        <p className='text-green-700 text-xl md:text-3xl  hidden md:block'>Menu</p>
      </section>
      <p className='text-yellow-300 text-2xl md:text-5xl cursor-pointer' onClick={() => setLocation( "/" )}>
        Little <span className='text-green-700 text-2xl md:text-5xl'>Lemmon</span>
      </p>
      <div className='flex gap-1'>
        <p className='text-green-700 font-thin text-md md:text-lg cursor-pointer' onClick={() => setLocation( "/login" )}>
          Login
        </p>
        <ShoppingCart color="#067f1a" className='text-2xl md:text-5xl' />
      </div>
    </header>
  )
}

export default NavBar
