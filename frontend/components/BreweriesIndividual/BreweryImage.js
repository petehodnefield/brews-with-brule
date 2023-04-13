import React from 'react'

const BreweryImage = ({brewery}) => {
    console.log(brewery)
    const BackGround = 'https://images.unsplash.com/photo-1600788886242-5c96aabe3757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'

    return (
        <div className='h-96 w-full bg-cover bg-center mb-6 xl:mb-12' style={{ backgroundImage: `url(${brewery.image})` }}></div>
    )
}

export default BreweryImage