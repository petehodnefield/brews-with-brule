import React from 'react'

const breweries = () => {
    const BackGround = 'https://images.unsplash.com/photo-1600788886242-5c96aabe3757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
    const MapBackGround = 'https://images.unsplash.com/photo-1586449480537-3a22cf98b04c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80'
    return (
        <section>
            <div className='h-96 bg-cover bg-center mb-6' style={{ backgroundImage: `url(${BackGround})` }}></div>
            <div className='px-6 mb-5'>
                <h2 className='text-1.5 font-semibold mb-4'>3rd Act Brewery</h2>
                <p className='text-0.875'>3rd Act Brewery, located in Woodbury, MN, is a family-owned and operated brewery that specializes in crafting unique and flavorful beers. </p>
            </div>
            <div className='grid grid-cols-2 grid-rows-3 px-6  gap-y-4 mb-8'>
                <div className='flex flex-col justify-start items-start'>
                    <p className='text-0.875 font-semibold '>$$</p>
                    <p className='text-0.75 text-medium'>Price ranges</p>
                </div>
                <div className='flex flex-col justify-start items-start'>
                    <p className='text-0.875 font-semibold '>Beers on tap</p>
                    <p className='text-0.75 text-medium'>20+ original beers</p>
                </div>
                <div className='flex flex-col justify-start items-start'>
                    <p className='text-0.875 font-semibold '>10am-10pm</p>
                    <p className='text-0.75 text-medium'>Open from</p>
                </div>
                <div className='flex flex-col justify-start items-start'>
                    <p className='text-0.875 font-semibold '>GF, Keto</p>
                    <p className='text-0.75 text-medium'>Options available</p>
                </div>
                <div className='flex flex-col justify-start items-start'>
                    <p className='text-0.875 font-semibold text-primary'>★★★★★</p>
                    <p className='text-0.75 text-medium'>Rating</p>
                </div>
            </div>
            {/* CTA Buttons */}
            <div className='px-6 flex gap-3 mb-12'>
                <button className='text-0.875 font-semibold bg-dark text-light w-full h-10 rounded'>Book a reservation</button>
                <button className='text-0.875 font-semibold bg-white  w-full h-10 rounded border-solid border-medium border-2'>See the list</button>
            </div>
            <div className='h-96 bg-cover bg-center mb-6' style={{ backgroundImage: `url(${MapBackGround})` }}></div>
        </section>
    )
}

export default breweries