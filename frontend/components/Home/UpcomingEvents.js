import React, { useState } from 'react'

const UpcomingEvents = () => {

    return (
        <div className='grid justify-start md:justify-center w-screen grid-rows-1	grid-flow-col pl-4	overflow-scroll	gap-4 lg:gap-6    mb-12 lg:mb-0'>
            <article className='w-40 flex flex-col items-center border-light border-1 pb-2 rounded-lg'>
                <div className='h-20 w-full bg-cover bg-center mb-4 xl:mb-12 rounded-t-lg' style={{ backgroundImage: `url(https://images.unsplash.com/photo-1600788886242-5c96aabe3757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80})` }}></div>
                <h4 className='font-semibold text-0.875 '>BWB at Bonfire</h4>
                <p className='text-medium text-0.75 mb-2'>Today</p>
                <div className='px-2 w-full'>
                    <button className='bg-primary text-0.875 text-white w-full h-10 rounded'> RSVP</button>
                </div>
            </article>
            <article className='w-40 flex flex-col items-center border-light border-1 pb-2 rounded-lg'>
                <div className='h-20 w-full bg-cover bg-center mb-4 xl:mb-12 rounded-t-lg' style={{ backgroundImage: `url(https://images.unsplash.com/photo-1600788886242-5c96aabe3757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80})` }}></div>
                <h4 className='font-semibold text-0.875 '>BWB at Bonfire</h4>
                <p className='text-medium text-0.75 mb-2'>Today</p>
                <div className='px-2 w-full'>
                    <button className='bg-primary text-0.875 text-white w-full h-10 rounded'> RSVP</button>
                </div>
            </article>
            <article className='w-40 flex flex-col items-center border-light border-1 pb-2 rounded-lg'>
                <div className='h-20 w-full bg-cover bg-center mb-4 xl:mb-12 rounded-t-lg' style={{ backgroundImage: `url(https://images.unsplash.com/photo-1600788886242-5c96aabe3757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80})` }}></div>
                <h4 className='font-semibold text-0.875 '>BWB at Bonfire</h4>
                <p className='text-medium text-0.75 mb-2'>Today</p>
                <div className='px-2 w-full'>
                    <button className='bg-primary text-0.875 text-white w-full h-10 rounded'> RSVP</button>
                </div>
            </article>
        </div>
    )
}

export default UpcomingEvents