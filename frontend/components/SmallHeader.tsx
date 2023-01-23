import React from 'react'
import '@/styles/globals.css'
import Link from 'next/link'

const SmallHeader = () => {
  return (
    <div className='flex w-full justify-center relative lg:hidden' >
      <div className='w-8 h-8 bg-secondary absolute left-4 top-4 rounded-lg flex justify-center items-center'>
        <div className='w-4 h-4 bg-primary rounded-lg'>
        </div>
      </div>
      <Link href='/' className='text-white text-2 py-5 font-semibold	'>BWB</Link>
    </div>
  )
}

export default SmallHeader