import LatestPosts from '../components/Home/LatestPosts'
import UpcomingEvents from '../components/Home/UpcomingEvents'
import Head from 'next/head'



export default function Home() {


  return (
      <main className='relative py-12 flex flex-col items-center lg:py-4'>
        {/* EVENTS SECTION */}
        <section className='flex flex-col items-center justify-start  lg:bg-secondary lg:w-660 lg:rounded lg:py-6  lg:py-4'>
          <h3 onClick={() => getData()} className='font-semibold text-1 mb-6'>Upcoming Events</h3>
          <UpcomingEvents />
        </section>

        {/* LATEST POSTS SECTION */}
        <LatestPosts />
      </main>
  )
}
