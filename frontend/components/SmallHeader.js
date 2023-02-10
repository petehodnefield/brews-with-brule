import React, { FunctionComponent } from 'react'
import Link from 'next/link'



const SmallHeader = () => {
  return (
    <div className='flex w-full justify-center relative md:hidden' >
      <Link href='/' className='text-white text-2 py-5 font-semibold' >BWB</Link>
    </div >
  )
}

export default SmallHeader