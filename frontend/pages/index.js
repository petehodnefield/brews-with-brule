import LatestPosts from '../components/Home/LatestPosts'
import UpcomingEvents from '../components/Home/UpcomingEvents'
import React, {useState, useEffect} from 'react'
import auth from '../utils/auth'

export default function Home() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
      setHydrated(true)
  }, [])

  if (!hydrated) return null

  return (
      <main className='relative py-12 flex flex-col items-center lg:py-4'>
        {/* EVENTS SECTION */}  
        {auth.loggedIn() ? (
            <section className='flex flex-col items-center justify-start  lg:bg-secondary lg:w-660 lg:rounded lg:py-6  lg:py-4'>
              <h3 onClick={() => getData()} className='font-semibold text-1 mb-6'>Upcoming Events</h3>
              <UpcomingEvents />
          </section>
        ): (
          ''
        )}

        {/* LATEST POSTS SECTION */}
        <LatestPosts />
      </main>
  )
}
