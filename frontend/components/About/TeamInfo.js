import React from 'react'
import { teamInfo } from '../../data/about-data'

const TeamInfo = () => {
    return (
        <section id='team' className=' w-screen bg-dark text-white  flex flex-col items-center py-12 lg:pt-16'>
            <h2 className='text-2 mb-6 lg:mb-12'>The Team:</h2>
            {teamInfo.map(teamMember => (
                <article key={teamMember.name} className='flex flex-col items-center px-6 mb-12 md:px-60 lg:mb-16'>
                    <img className='h-40 w-40 rounded mb-4 lg:h-40 lg:w-80 object-cover' src={teamMember.image} />
                    <p className='font-semibold mb-1.5 text-1'>{teamMember.name}</p>
                    <p className='text-primary text-0.75 mb-1.5'>{teamMember.job}</p>
                    <p className='text-0.875 lg:w-660'>
                        {teamMember.description}
                    </p>
                </article>
            ))}
        </section>
    )
}

export default TeamInfo