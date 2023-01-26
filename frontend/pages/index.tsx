import LatestPosts from '@/components/Home/LatestPosts'
import UpcomingEvents from '@/components/Home/UpcomingEvents'
import Head from 'next/head'



export default function Home() {

  return (
    <>
      <Head>
        <title>Brews With Brule</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='py-12 flex flex-col items-center lg:py-4'>
        {/* EVENTS SECTION */}
        <section className='flex flex-col items-center justify-start px-6 lg:bg-secondary lg:w-660 lg:rounded lg:py-6  lg:py-4'>
          <h3 className='font-semibold text-1 mb-6'>Upcoming Events</h3>
          <UpcomingEvents />
        </section>

        {/* LATEST POSTS SECTION */}
        <LatestPosts />

      </main>
    </>
  )
}
