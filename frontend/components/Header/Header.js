import React, { useState, useEffect, FC } from 'react'
import SmallHeader from '../SmallHeader'
import Nav from '../Nav'
import Link from 'next/link'
import Hamburger from './Hamburger'
import { Icon } from '@iconify/react';

export default function Header({setNavSelected, navSelected, setIsOpen, isOpen}) {


  return (
    <header className=' relative bg-primary shadow-sm  lg:flex  flex items-center justify-around lg:px-30 w-full'>
      <SmallHeader />
      <Link onClick={() => setNavSelected('home')} href='/' className='hidden md:block text-white text-2 py-8'> 
        <span className='flex items-center'>
          <Icon className='text-2.5 font-semibold' icon="fluent:drink-beer-24-regular" /> rews w/ Brule
        </span> 
      </Link>
     

      <Nav 
        navSelected={navSelected} 
        setNavSelected={setNavSelected}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </header>
  )
}

