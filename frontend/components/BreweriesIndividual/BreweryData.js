import React from 'react'

const BreweryData = ({brewery}) => {
    


    return (
        <div className='grid grid-cols-2 xl:grid-cols-5 grid-rows-3 xl:grid-rows-1 px-6 md:px-12 lg:px-0 gap-y-4 xl:gap-y-4 mb-8 xl:auto-cols-min'>
            <div className='flex flex-col justify-start items-start'>
                <p className='text-0.875 font-semibold '>{brewery.price}</p>
                <p className='text-0.75 text-medium'>Price ranges</p>
            </div>
            <div className='flex flex-col justify-start items-start w-max '>
                <p className='text-0.875 font-semibold '>Beers on tap</p>
                <p className='text-0.75 text-medium'>30+ Original beers</p>
            </div>
            <div className='flex flex-col justify-start items-start'>
                <p className='text-0.875 font-semibold '>{brewery.hours}</p>
                <p className='text-0.75 text-medium'>Open from</p>
            </div>
            <div className='flex flex-col justify-start items-start'>
                <p className='text-0.875 font-semibold '>{brewery.optionsAvailable}</p>
                <p className='text-0.75 text-medium'>Options available</p>
            </div>
            <div className='flex flex-col justify-start items-start'>
                <p className='text-0.875 font-semibold text-primary'>{brewery.rating}</p>
                <p className='text-0.75 text-medium'>Rating</p>
            </div>
        </div>
    )
}

export default BreweryData