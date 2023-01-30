import React, { useState, useEffect, FC } from 'react'
import SmallHeader from '../SmallHeader'
import Nav from '../Nav'
import Link from 'next/link'
import Hamburger from './Hamburger'


export default function Header() {
  return (
    <header className=' relative bg-primary shadow-sm  lg:flex  flex items-center justify-around lg:px-30 w-full'>
      <SmallHeader />
      <Link href='/' className='hidden lg:block text-white text-2 py-8'>Brews With Brule</Link>
      <Nav />
    </header>
  )
}

