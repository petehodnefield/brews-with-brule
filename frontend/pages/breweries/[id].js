import { useRouter } from 'next/router'
import React, {useEffect, useState} from 'react'
import BreweryImage from '../../components/BreweriesIndividual/BreweryImage'
import BreweryData from '../../components/BreweriesIndividual/BreweryData'
import BreweryName from '../../components/BreweriesIndividual/BreweryName'
import BreweryCTA from '../../components/Breweries/BreweryCTA'
import BreweryMap from '../../components/Breweries/BreweryMap'
import BreweryList from '../../components/Breweries/BreweryList'
import { initializeApollo } from '../../lib/apollo'

import { useQuery, gql } from '@apollo/client'
import { SINGLE_BREWERY } from '../../utils/queries'
const BreweryDetails =  ({queryID}) => {
    console.log('queryId', queryID)
    const {data, loading, error} = useQuery(SINGLE_BREWERY, {
        variables: {id: "63e39855064b43c4a3804818"}
    })

    console.log(data)
    if(loading) return <h1> Loading...</h1>
    if(error || !data) return <h1> Error</h1>
    // if(data.id.length === 0) return <h2>404 | Not Found</h2>

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

export const getServerSideProps = async({query}) => {
    const queryID = query.id

    const apolloClient = initializeApollo()
    await apolloClient.query({
        query: SINGLE_BREWERY,
        variables: {id: queryID},
    })
    return {
        props: {initializeApolloState: apolloClient.cache.extract(), queryID}
    }
}