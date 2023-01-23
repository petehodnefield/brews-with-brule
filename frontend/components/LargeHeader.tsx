import React from 'react'
import Nav from './Nav'

const LargeHeader = () => {
    return (
        <div className='sm:hidden lg:flex h-20 flex items-center justify-around mx-40 w-full'>
            <Nav />
        </div>
    )
}

export default LargeHeader