import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import auth from '../../utils/auth'
import { Icon } from '@iconify/react';

const FooterMobile = ({setNavSelected, navSelected}) => {
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true)
    }, [])
    
    const divWrapperStyle = 'flex flex-col h-12 items-center justify-center hover:cursor-pointer hover:opacity-70'
    const iconWrapperStyle = 'h-6 w-6 flex items-center justify-center'
    const textStyle = 'text-0.625 font-semibold  '

    const logout = event => {
        event.preventDefault()
        auth.logout()
    }
    if (!hydrated) return null

    return (
        <footer className='fixed bottom-0 w-full bg-white  border-medium border-t-1 border-solid grid grid-cols-5 items-center justify-center md:hidden'>
            <Link onClick={() => setNavSelected('home')} href={`/`}>
                    <div className={divWrapperStyle}>
                        <div className={`${iconWrapperStyle} ${navSelected === 'home' ? 'bg-primary rounded-lg': ''}`}>
                        <Icon icon="material-symbols:home-outline-rounded" width="16" />
                        </div>
                        <h5 className={`${textStyle} ${navSelected === 'home' ? 'text-primary': ''} `}>Home</h5>
                    </div>
            </Link>
            <Link onClick={() => setNavSelected('about')} href={`/about`}>
                    <div className={divWrapperStyle}>
                        <div className={`${iconWrapperStyle} ${navSelected === 'about' ? 'bg-primary rounded-lg': ''}`}>
                        <Icon icon="mdi:about-circle-outline" width="16" />
                        </div>
                        <h5 className={`${textStyle} ${navSelected === 'about' ? 'text-primary': ''} `}>About</h5>
                    </div>
            </Link>
            <Link onClick={() => setNavSelected('breweries')} href={`/breweries`}>
                    <div className={divWrapperStyle}>
                        <div className={`${iconWrapperStyle} ${navSelected === 'breweries' ? 'bg-primary rounded-lg': ''}`}>
                        <Icon icon="lucide:beer" width="16" />
                        </div>
                        <h5 className={`${textStyle} ${navSelected === 'breweries' ? 'text-primary': ''} `}>Breweries</h5>
                    </div>
            </Link>
            <Link onClick={() => setNavSelected(`${auth.loggedIn() ? 'post': 'login'}`)} href={`${auth.loggedIn() ? '/post': '/login'}`}>
                    <div className={divWrapperStyle}>
                        <div className={`${iconWrapperStyle} ${navSelected === 'post' ? 'bg-primary rounded-lg': ''}`}>
                        <Icon icon="ic:round-post-add" width="16" />
                        </div>
                        <h5 className={`${textStyle} ${navSelected === 'post' ? 'text-primary': ''} `}>Post</h5>
                    </div>
            </Link>
            {auth.loggedIn() ? (
                <Link onClick={logout} href={`/`} >
                <div className={divWrapperStyle}>
                    <div className={`${iconWrapperStyle}`}>
                    <Icon icon="material-symbols:login-rounded" width="16" />
                    </div>
                    <h5 className={`${textStyle} ${navSelected === 'login' ? 'text-primary': ''} `}>Logout</h5>
                </div>
        </Link>

            ): ( <Link onClick={() => setNavSelected('login')} href={`/login`}>
            <div className={divWrapperStyle}>
                <div className={`${iconWrapperStyle} ${navSelected === 'login' ? 'bg-primary rounded-lg': ''}`}>
                <Icon icon="material-symbols:login-rounded" width="16" />
                </div>
                <h5 className={`${textStyle} ${navSelected === 'login' ? 'text-primary': ''} `}>Login</h5>
            </div>
    </Link>

            )}
           
        </footer>
    )
}

export default FooterMobile