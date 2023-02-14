import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import auth from '../utils/auth'

const Nav = ({isOpen, setIsOpen, navSelected, setNavSelected}) => {
    
    const transitionStyle = "hover:text-dark transition ease-in duration-125"

    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true)
    }, [])

    const logout = event => {
        event.preventDefault()
        auth.logout()
    }



    if (!hydrated) return null
    return (
        <nav className='hidden md:flex'>
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
                        href={`${auth.loggedIn() ? '/post': '/login'}`} 
                        className={`text-0.75 text-white ml-8 ${transitionStyle}  ${navSelected === 'post' ? 'underline': ''}`} 
                        onClick={() => setNavSelected(`${auth.loggedIn() ? 'post': 'login'}`)}
                        >   Post
                    </Link>  
                </li>  
             
               
                {!auth.loggedIn() ? (
                    <li className={` ${auth.loggedIn() ? '' : 'relative'}`}    
                    onMouseLeave={() => {
                        setIsOpen(false)
                    }}>
                        <Link 
                            href='/login' 
                            className={` text-0.75 text-white ml-8 ${transitionStyle} ${navSelected === 'login' ? 'underline': ''}`} 
                            onMouseOver={() => {
                                setIsOpen(true)
                                setNavSelected('login')
                            }}


                            onClick={() => setNavSelected('login')}
                            >   Login <span className='text-0.5'>▼</span>
                        </Link>  
                    {isOpen ? (
                        <div className='absolute top-5 left-5 flex justify-center items-center w-16	h-5	bg-secondary rounded-full hover:bg-dark transition ease-in duration-125'>
                            <Link 
                                href='/signup' 
                                className={`text-0.75 w-full text-dark hover:text-white transition ease-in duration-125 flex justify-center `} 
                                onMouseOver={() => setIsOpen(true)}
                                onMouseLeave={() => {
                                    setIsOpen(false)
                                }}
                                onClick={() => setNavSelected('login')}
                                >   Signup 
                            </Link>  
                        </div>
                    ): (
                        
                      ''
                   
                    )}
                    </li>
                ): (
                    <li>
                        <Link
                        href='/'
                        className={`  ml-8 ${transitionStyle} ${navSelected === 'login' ? 'underline': ''}`}
                        onClick={logout }
                        >   <button className='text-0.75 text-primary bg-white rounded-full h-8 w-20'>Logout</button>
                        </Link>
                    </li>
                )}
                 

            </ul>
        </nav>
    )
}

export default Nav