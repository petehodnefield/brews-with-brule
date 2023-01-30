import React, {useState} from 'react'
import Link from 'next/link'
const Nav = () => {
    const [navSelected, setNavSelected] = useState('home')
 
    const transitionStyle = "hover:text-dark transition ease-in duration-125"

    return (
        <nav className='hidden lg:flex'>
            <ul className='flex items-center'>
                <li >
                    <Link 
                        href='/' 
                        className={`text-0.75 text-white ml-8 ${transitionStyle} ${navSelected === 'home' ? 'underline': ''}`} 
                        onClick={() => setNavSelected('home')}
                        >   Home
                    </Link>
                </li>
                <li>
                    <Link 
                        href='/breweries' 
                        className={`text-0.75 text-white ml-8 ${transitionStyle}  ${navSelected === 'breweries' ? 'underline': ''}`} 
                        onClick={() => setNavSelected('breweries')}
                        >   Breweries
                    </Link>                
                </li>
                <li>
                    <Link 
                        href='/about' 
                        className={`text-0.75 text-white ml-8 ${transitionStyle}  ${navSelected === 'about' ? 'underline': ''}`} 
                        onClick={() => setNavSelected('about')}
                        >   About
                    </Link>  
                </li>
                <li>
                    <Link 
                        href='/post' 
                        className={`text-0.75 text-white ml-8 ${transitionStyle}  ${navSelected === 'post' ? 'underline': ''}`} 
                        onClick={() => setNavSelected('post')}
                        >   Post
                    </Link>  
                </li>
                <li>
                    <Link 
                        href='/login' 
                        className={`text-0.75 text-white ml-8 ${transitionStyle} ${navSelected === 'login' ? 'underline': ''}`} 
                        onClick={() => setNavSelected('login')}
                        >   Login
                    </Link>  
                </li>


            </ul>
        </nav>
    )
}

export default Nav