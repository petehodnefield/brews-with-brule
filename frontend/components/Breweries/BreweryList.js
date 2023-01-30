import React from 'react'
import { breweryInfo } from '@/data/brewery-data'
import Link from 'next/link'
const BreweryList = () => {
    return (
        <div>
            {breweryInfo.map(brewery => (
                <div>
                    <Link href={`/breweries?brewery=${brewery.name}`} className='h-12 bg-primary w-40 mb-4 text-white'>{brewery.name}</Link>
                </div>
            ))}</div>
    )
}

export default BreweryList