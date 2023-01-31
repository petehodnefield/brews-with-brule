import React from 'react'
import { breweryInfo } from '../../data/brewery-data'
import Link from 'next/link'
const BreweryList = ({setThisBrewery}) => {
    return (
        <div>
            <h2 className='text-2 mb-8'> Other breweries:</h2>
            {breweryInfo.map(brewery => (
                <div   key={brewery.name}>
                    <Link onClick={() => setThisBrewery(brewery)} href={{ pathname: `/breweries/${brewery.name}`, query: {data: brewery.name, brewery}}} >
                        <button className='h-12 bg-primary w-40 mb-4 text-white'>{brewery.name}</button>
                    </Link>
                </div>
            ))}</div>
    )
}

export default BreweryList