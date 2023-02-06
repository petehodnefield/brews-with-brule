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
        <div>
            <h2 className='text-2 mb-8'> Other breweries:</h2>
            {breweries.map(brewery => (
                <div key={brewery.name}>
                    <Link props={brewery._id}  href={`/breweries/${brewery._id}`} >
                        <button className='h-12 bg-primary w-40 mb-4 text-white'>{brewery.name}</button>
                    </Link>
                </div>
            ))}
            </div>
    )
}

export default BreweryList