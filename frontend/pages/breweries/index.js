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
        <section className='flex flex-col justify-start items-center w-full h-full'>
            <BreweryImage />
            <section className='px-6 md:px-12 lg:px-24 mb-12 xl:w-70 lg:px-0'>
                <h2 className='text-2 font-semibold mb-3'> Breweries</h2>
                <p className='text-0.875 mb-8 '>Our passion for great beer and strong partnerships with local brewers has made us the go-to destination for beer lovers everywhere. We have carefully curated a list of the best local brews that showcase the unique flavors and styles of the Twin Cities. Our selection includes everything from classic ales and lagers to bold stouts and sour beers.
                    Our partnerships with several local breweries allow us to bring you a constantly rotating selection of the freshest, most innovative beers available. 
                </p>
                <h3 className='text-1.5  mb-3'>The best beer from the midwest, <span className='text-primary font-bold'>handselected by Brule himself</span></h3>
                <p className='text-0.875 '>We are always on the lookout for the latest and greatest brews, and our relationships with local breweries help us stay at the forefront of the beer scene.
                    So whether you are a seasoned beer connoisseur or just starting to explore the world of craft beer, we invite you to come and sample the best of what the Twin Cities has to offer. Stop by our taproom today and discover the perfect beer for your taste buds!
                </p>
            </section>
            <BreweryList />
        </section>

    )
}

export default breweries