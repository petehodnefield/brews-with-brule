import { useRouter } from 'next/router'
import React, {useState, useEffect} from 'react'
import Header from '../../components/Header/Header'
import { breweryInfo } from '../../data/brewery-data'

const BreweryDetails =  async() => {
    const [brewery, setBrewery] = useState({})
const param =  useRouter().query.name
console.log(param)

useEffect(() => {
    breweryInfo.map(thisBrewery => {
        if(thisBrewery.id === parseInt(param)) {
            setBrewery(thisBrewery)
        }
        return
    })
}, [])
  return (
    <div>
        <Header/>
     
    </div>
  )
}

export default BreweryDetails