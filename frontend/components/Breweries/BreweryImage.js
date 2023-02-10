import React from 'react'

const BreweryImage = () => {
    const BackGround = 'https://images.unsplash.com/photo-1600788886242-5c96aabe3757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'

    return (
        <div className='h-96 w-full bg-cover bg-center mb-6 md:mb-10 xl:mb-12' style={{ backgroundImage: `url(${BackGround})` }}></div>
    )
}

export default BreweryImage