import Link from 'next/link'
import React from 'react'

const AboutInfo = () => {
    return (
        <div className='flex flex-col items-center justify-center pb-4 lg:pb-12'>
            <article className='flex flex-col pt-12 relative mb-12 lg:w-4/5 lg:flex-row lg:gap-12 lg:px-8 lg:justify-between  xl:w-64'>
                <div className='px-6 md:px-40 lg:px-0  lg:w-660'>
                    <h2 className='text-1.5 italic mb-3 lg:mb-4'>About us</h2>
                    <p className='text-0.875 mb-6 lg:mb-6'>Welcome to Brews With Brule! We're all about friends getting together to enjoy a cold one and have a good time. At our core, we believe in the power of friendship and the role that beer plays in bringing people together.
                    </p>
                    <a href="#team"><button className='bg-dark text-white w-full h-12 lg:w-60'>Meet the team</button></a>
                </div>
                <div className='hidden lg:block w-80 h-48 pt-0'>
                    <img className=' rounded  w-full h-full  object-cover' src='https://plus.unsplash.com/premium_photo-1658526884541-e74c95642c6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80' />
                </div>
            </article>
            <article className='flex flex-col items-center  lg:py-16  mb-12 lg:mb-4 lg:w-4/5 lg:flex-row lg:gap-16 xl:gap-32 lg:px-4 lg:justify-between lg:items-end  xl:w-64'>
                <div className='px-6 md:px-40 lg:px-0 order-2 lg:pt-0	lg:pb-6'>
                    <h2 className='text-1.5 italic mb-3 lg:mb-4 text-primary '>A hub for beer enthusiasts</h2>
                    <p className='text-0.875 mb-6 lg:mb-6  '>
                        Our website is a place for beer enthusiasts of all levels to come and learn more about the world of beer. From reviews of new and exciting brews, to tips and tricks for hosting the perfect beer tasting party with friends, we've got you covered.
                    </p>
                        <Link href='/breweries' >
                            <button className='bg-primary text-white w-full h-12 lg:w-60'>
                                Our favorite breweries
                            </button>
                        </Link>
                   
                </div>
                <div className='rounded-full hidden lg:block lg:h-72 lg:w-72 object-fit flex-shrink-0	lg:flex-grow	' 
                    style={{ 
                        backgroundImage: `url(https://images.unsplash.com/photo-1471421298428-1513ab720a8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80})` ,
                        backgroundSize: 'cover' ,
                        boxSizing: 'border-box'
                    }}
                    >
                </div>
            </article>
            <article className='flex flex-col relative mb-12 lg:px-4 lg:w-4/5 lg:justify-between xl:w-64'>
                <div className='px-6 md:px-40 lg:px-0   '>
                    <h2 className='text-1.5 italic mb-3  lg:mb-4'>A community for beer lovers to share their passion.</h2>
                    <p className='text-0.875 mb-6 lg:mb-6 lg:w-660'>
                        We're dedicated to providing a fun and welcoming space for all beer lovers to come and share their passion. So grab a cold one and join us on our journey of discovery through the world of beer and friendship.
                    </p>
                    <Link href='/signup'>
                        <button className='bg-dark text-white w-full h-12 lg:w-60'>Join us today!</button>
                    </Link>
                </div>
            </article>
        </div>
    )
}

export default AboutInfo