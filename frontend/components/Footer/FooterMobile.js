import Link from 'next/link'
import React from 'react'

const FooterMobile = () => {

    return (
        <footer className='sticky bottom-0 bg-white border-light border-t-1 border-solid grid grid-cols-5 items-center justify-items-center mb-8 md:hidden'>
            <Link href='/'>
                <div className='flex flex-col h-12 items-center justify-center hover:cursor-pointer hover:opacity-70'>
                    <div className='h-6 w-6 flex items-center justify-center bg-primary rounded-lg'>
                        <img className='w-1/2 h-1/2' src="https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80" alt="" />
                    </div>
                    <h5 className='text-0.625 font-semibold text-primary'>Home</h5>
                </div>
            </Link>


            <Link href='/about'>
                <div className='flex flex-col h-12 items-center justify-center hover:cursor-pointer hover:opacity-70'>
                    <div className='h-6 w-6 flex items-center justify-center '>
                        <img className='w-1/2 h-1/2' src="https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80" alt="" />
                    </div>
                    <h5 className='text-0.625 font-semibold text-medium'>About</h5>
                </div>
            </Link>

            <Link href='/post'>
                <div className='flex flex-col h-12 items-center justify-center hover:cursor-pointer hover:opacity-70'>
                    <div className='h-6 w-6 flex items-center justify-center '>
                        <img className='w-1/2 h-1/2' src="https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80" alt="" />
                    </div>
                    <h5 className='text-0.625 font-semibold text-medium'>Post</h5>
                </div>
            </Link>

            <Link href='/profile'>
                <div className='flex flex-col h-12 items-center justify-center hover:cursor-pointer hover:opacity-70'>
                    <div className='h-6 w-6 flex items-center justify-center '>
                        <img className='w-1/2 h-1/2' src="https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80" alt="" />
                    </div>
                    <h5 className='text-0.625 font-semibold text-medium'>Profile</h5>
                </div>
            </Link>

            <Link href='/contact'>
                <div className='flex flex-col h-12 items-center justify-center hover:cursor-pointer hover:opacity-70'>
                    <div className='h-6 w-6 flex items-center justify-center '>
                        <img className='w-1/2 h-1/2' src="https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80" alt="" />
                    </div>
                    <h5 className='text-0.625 font-semibold text-medium'>Contact</h5>
                </div>
            </Link>
        </footer>
    )
}

export default FooterMobile