import React from 'react'
import Link from 'next/link'
import { useQuery, gql } from '@apollo/client'
import { BREWERIES } from '../../utils/queries'


const BreweryList = () => {
    const {loading, error, data} = useQuery(BREWERIES)
    
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    const breweries = data.breweries

    console.log('indi', breweries)
    return (
        <div className='w-4/5 px-6 flex flex-col items-center mb-16'>
            <h2 className='text-1.5 mb-4 font-semibold text-center	'> Brule's favorite breweries:</h2>
            <div className=' w-full flex-col flex lg:flex-row lg:gap-4 justify-center'>
                {breweries.map(brewery => (
                <Link className='w-full lg:w-60'  key={brewery.name}  href={`/breweries/${brewery._id}`} >
                        <button className='h-12 bg-dark w-full  mb-2 lg:mb-4 text-white rounded'>{brewery.name}</button>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export const getStaticProps = async() => {
    const apolloClient = initializeApollo()
    await apolloClient.query({
        query: BREWERIES,
    })
    return {props: {initialApolloState: apolloClient.cache.extract()}}
}


export default BreweryList