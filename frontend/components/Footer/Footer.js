import Link from 'next/link'
import React from 'react'
import FooterMobile from './FooterMobile'

const Footer = ({setNavSelected}) => {
    const currentYear = new Date().getFullYear()
    return (
          <footer className='  hidden relative   w-full bg-primary md:flex justify-center flex-col items-center pb-4 pt-6'>
                <h2 className='text-2 text-white mb-4'>BWB</h2>
                <ul className='flex justify-center gap-4 mb-2 items-center'>
                    <Link 
                        href='/contact' 
                        className='text-white text-0.75 font-semibold	'
                        onClick={() => setNavSelected('')}
                        >
                        Contact 
                    </Link>
                    <span className='text-white'>|</span>
                    <Link 
                        href='/about'
                        className='text-white text-0.75 font-semibold	'
                        onClick={() => setNavSelected('about')}
                     >About</Link>
                    <span className='text-white'>|</span>

                    <Link 
                    href='/breweries' 
                    className='text-white text-0.75 font-semibold	'
                    onClick={() => setNavSelected('breweries')}
                    >Breweries</Link>

                </ul>
                <p className='text-xsm text-white'>©{currentYear} Brews With Brule LLC</p>
            </footer>

      
    )
}

export default Footer