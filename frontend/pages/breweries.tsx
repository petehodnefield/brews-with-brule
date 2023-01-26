import BreweryCTA from '@/components/Breweries/BreweryCTA'
import BreweryData from '@/components/Breweries/BreweryData'
import BreweryImage from '@/components/Breweries/BreweryImage'
import BreweryMap from '@/components/Breweries/BreweryMap'
import BreweryName from '@/components/Breweries/BreweryName'
import React from 'react'

const breweries = () => {
    return (
        <section className='flex flex-col justify-center items-center w-full'>
            <BreweryImage />
            <section className='xl:flex xl:justify-around xl:w-70'>
                <article className=' flex flex-col '>
                    <BreweryName />
                    <BreweryData />
                    <BreweryCTA />
                </article>
                <BreweryMap />
            </section>
        </section>
    )
}

export default breweries