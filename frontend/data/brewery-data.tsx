type BreweryInfo = {
    name: string,
    description: string,
    id: number,
    location: string,
    price: string,
    taps: string,
    hours: string,
    optionsAvailable: string,
    rating: string,
    image: string
}
export const breweryInfo: BreweryInfo[] = [
    {
        name: '3rd Act Brewery',
        id: 1,
        description: '3rd Act Brewery, located in Woodbury, MN, is a family-owned and operated brewery that specializes in crafting unique and flavorful beers.',
        location: 'Woodbury, MN',
        price: '$$',
        taps: '20+',
        hours: '10am - 10pm',
        optionsAvailable: 'GF, Keto',
        rating: '★★★★★',
        image: 'https://images.unsplash.com/photo-1600788886242-5c96aabe3757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    },
    {
        name: 'Lift Bridge',
        id: 2,

        description: '3rd Act Brewery, located in Woodbury, MN, is a family-owned and operated brewery that specializes in crafting unique and flavorful beers.',
        location: 'Stillwater, MN',
        price: '$',
        taps: '40+',
        hours: '10am - 12am',
        optionsAvailable: 'GF',
        rating: '★★★★★',
        image: 'https://images.unsplash.com/photo-1600788886242-5c96aabe3757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    },
    {
        name: 'Surly',
        id: 3,

        description: '3rd Act Brewery, located in Woodbury, MN, is a family-owned and operated brewery that specializes in crafting unique and flavorful beers.',
        location: 'Minneapolis, MN',
        price: '$$$',
        taps: '100+',
        hours: '10am - 2am',
        optionsAvailable: 'GF, Keto',
        rating: '★★★★★',
        image: 'https://images.unsplash.com/photo-1600788886242-5c96aabe3757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    },
]