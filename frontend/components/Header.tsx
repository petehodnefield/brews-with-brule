import React from 'react'
import SmallHeader from './SmallHeader'
const colors = require('tailwindcss/colors')
import '@/styles/globals.css'
import LargeHeader from './LargeHeader'
import Nav from './Nav'
import Link from 'next/link'

interface Props {
  isOpen: boolean,
  setIsOpen: (active: boolean) => void
}

const Header: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  console.log(isOpen)
  return (
    <header onClick={() => setIsOpen(true)} className='bg-primary shadow-sm  lg:flex  flex items-center justify-around lg:px-30 w-full'>
      <SmallHeader />
      <Link href='/' className='hidden lg:block text-white text-2 py-8'>Brews With Brule</Link>
      <Nav />
    </header>
  )
}

export default Header