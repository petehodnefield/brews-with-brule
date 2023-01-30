import React from 'react'
import Link from 'next/link'
const Nav = () => {
    return (
        <nav className='hidden lg:flex'>
            <ul className='flex items-center'>
                <li >
                    <Link href='/' className='text-0.75 text-white ml-8'>Home</Link>
                </li>
                <li>
                    <Link href='/breweries' className='text-0.75 text-white  ml-8'>Breweries</Link>
                </li>
                <li>
                    <Link href='/about' className='text-0.75 text-white  ml-8'>About</Link>
                </li>
                <li>
                    <Link href='/post' className='text-0.75 text-white  ml-8'>Post</Link>
                </li>
                <li>
                    <Link href='/login' className='text-0.75 text-white  ml-8'>Login ▾</Link>
                </li>


            </ul>
        </nav>
    )
}

export default Nav