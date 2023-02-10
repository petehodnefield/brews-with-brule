import React from 'react'

const BreweryName = ({brewery}) => {
  
    return (
        <div className='px-6 md:px-12 lg:px-0  mb-5 xl:mb-4'>
            <h2 className='text-1.5 font-semibold mb-4'>{brewery.name}</h2>
            <p className='text-0.875 md:w-660'>{brewery.description}</p>
        </div>
    )
}

export default BreweryName