import React from 'react'

const BreweryMap = () => {
    const MapBackGround = 'https://images.unsplash.com/photo-1586449480537-3a22cf98b04c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80'

    return (
        <div className='h-96 bg-cover bg-center mb-6 w-full xl:w-80 xl:h-64' style={{ backgroundImage: `url(${MapBackGround})` }}></div>
    )
}

export default BreweryMap