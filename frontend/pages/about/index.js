import React from 'react'
import TeamInfo from '../../components/About/TeamInfo'
import AboutInfo from '../../components/About/AboutInfo'

const about = () => {
    return (
        <section className='h-full'>
          
            <div className='flex flex-col items-center justify-center '>
                <AboutInfo />
                <TeamInfo />
            </div>
        </ section>

    )
}

export default about