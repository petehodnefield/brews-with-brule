import BreweryCTA from '../../components/Breweries/BreweryCTA'
import BreweryData from '../../components/Breweries/BreweryData'
import BreweryImage from '../../components/Breweries/BreweryImage'
import BreweryList from '../../components/Breweries/BreweryList'
import BreweryMap from '../../components/Breweries/BreweryMap'
import BreweryName from '../../components/Breweries/BreweryName'
import Header from '../../components/Header/Header'
import Head from 'next/head'
import React from 'react'

const breweries = () => {

    return (
        <section className='flex flex-col justify-start items-center w-full h-screen'>
            <BreweryImage />
            <section className='xl:flex xl:justify-around xl:w-70'>
                <article className=' flex flex-col '>
                    <BreweryName />
                    <BreweryData />
                    <BreweryCTA />
                </article>
                <BreweryMap />
            </section>
            <BreweryList />
        </section>

    )
}

export default breweries