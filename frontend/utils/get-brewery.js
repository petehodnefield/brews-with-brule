import { breweryInfo } from "../data/brewery-data"
export const getBreweryData = (data, setThisBrewery) => {
    breweryInfo.map(brewery => {
        if(brewery.name === data) {
            setThisBrewery(brewery)
        }
        else{
            return (
                <h1>
                    hi
                </h1>
            )
        }
    })
}