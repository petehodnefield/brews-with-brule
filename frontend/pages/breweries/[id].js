import { useRouter } from 'next/router'
import React, {useEffect, useState} from 'react'
import BreweryImage from '../../components/BreweriesIndividual/BreweryImage'
import BreweryData from '../../components/BreweriesIndividual/BreweryData'
import BreweryName from '../../components/BreweriesIndividual/BreweryName'
import BreweryCTA from '../../components/Breweries/BreweryCTA'
import BreweryMap from '../../components/Breweries/BreweryMap'
import BreweryList from '../../components/Breweries/BreweryList'

import { useQuery, gql } from '@apollo/client'
import { SINGLE_BREWERY } from '../../utils/queries'
const BreweryDetails =  () => {
    const [breweryID, setBreweryID] = useState('')
    const params = useRouter().query.id
    useEffect(() => {
        setBreweryID(params)
    },[])
 
    console.log('breweryID', breweryID)

    const {loading, error, data } = useQuery(SINGLE_BREWERY, {
       variables: {id: "63e0e696de863a01a904f810"} 
    })


    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    const breweryGuy = data.brewery

    console.log('data brewery', breweryGuy)
    return (
        <div>
            hi
            <section className='flex flex-col justify-start items-center w-full h-screen'>
                <BreweryImage></BreweryImage>
                <section className='xl:flex xl:justify-around xl:w-70'>
                    <article className=' flex flex-col '>
                        <BreweryName  ></BreweryName>
                        <BreweryData ></BreweryData>
                        <BreweryCTA></BreweryCTA>
                    </article>
                    <BreweryMap></BreweryMap>
                </section>
                {/* <BreweryList setThisBrewery={setThisBrewery}></BreweryList> */}
            </section>
        
        </div>
    )
}

export default BreweryDetails