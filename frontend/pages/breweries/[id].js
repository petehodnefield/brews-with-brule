import React from 'react'
import BreweryImage from '../../components/BreweriesIndividual/BreweryImage'
import BreweryData from '../../components/BreweriesIndividual/BreweryData'
import BreweryName from '../../components/BreweriesIndividual/BreweryName'
import BreweryCTA from '../../components/Breweries/BreweryCTA'
import BreweryMap from '../../components/Breweries/BreweryMap'
import BreweryListIndividual from '../../components/Breweries/BreweryListIndividual'
import { initializeApollo } from '../../lib/apollo'

import { useQuery, gql } from '@apollo/client'
import { SINGLE_BREWERY } from '../../utils/queries'
const BreweryDetails =  ({queryID,}) => {
    const {data, loading, error} = useQuery(SINGLE_BREWERY, {
        variables: {id: queryID}
    })

    if(loading) return <h1> Loading...</h1>
    if(error || !data) return <h1> Error</h1>
    if(data.brewery.length === 0) return <h2>404 | Not Found</h2>

    const thisBrewery = data.brewery

    return (
        <div className='h-full'>
            
            <section className='flex flex-col justify-start items-center w-full h-full'>
                <BreweryImage></BreweryImage>
                <section className='xl:flex xl:justify-around xl:w-70 lg:mb-4'>
                    <article className=' flex flex-col '>
                        <BreweryName brewery={thisBrewery} ></BreweryName>
                        <BreweryData brewery={thisBrewery} ></BreweryData>
                        <BreweryCTA></BreweryCTA>
                    </article>
                    <BreweryMap></BreweryMap>

                </section>
                <BreweryListIndividual thisBrewery={thisBrewery}></BreweryListIndividual>

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