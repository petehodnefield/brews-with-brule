import React from 'react'
import Head from 'next/head'
import TeamInfo from '@/components/About/TeamInfo'
import AboutInfo from '@/components/About/AboutInfo'

const about = () => {
    return (
        <>
            <Head>
                <title>Brews With Brule</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='flex flex-col items-center justify-center'>
                <AboutInfo />
                <TeamInfo />
            </main>
        </>

    )
}

export default about