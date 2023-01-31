import { useRouter } from 'next/router'
import React, {useEffect, useState} from 'react'
import BreweryImage from '../../components/BreweriesIndividual/BreweryImage'
import BreweryData from '../../components/BreweriesIndividual/BreweryData'
import BreweryName from '../../components/BreweriesIndividual/BreweryName'
import { getBreweryData } from '../../utils/get-brewery'
import BreweryCTA from '../../components/Breweries/BreweryCTA'
import BreweryMap from '../../components/Breweries/BreweryMap'
import BreweryList from '../../components/Breweries/BreweryList'
const BreweryDetails =  () => {
    const data = useRouter().query.data
    const [thisBrewery, setThisBrewery] = useState({})
console.log(thisBrewery)
    useEffect(() => {
        getBreweryData(data, setThisBrewery)
    }, [])

    return (
        <div>
        {!thisBrewery ? (
            <div>Loading</div>
        ): (
            <section className='flex flex-col justify-start items-center w-full h-screen'>
                <BreweryImage props={thisBrewery}></BreweryImage>
                <section className='xl:flex xl:justify-around xl:w-70'>
                    <article className=' flex flex-col '>
                        <BreweryName props={thisBrewery}></BreweryName>
                        <BreweryData props={thisBrewery}></BreweryData>
                        <BreweryCTA></BreweryCTA>
                    </article>
                    <BreweryMap></BreweryMap>
                </section>
                <BreweryList setThisBrewery={setThisBrewery}></BreweryList>
            </section>
        )}
        </div>
    )
}

export default BreweryDetails