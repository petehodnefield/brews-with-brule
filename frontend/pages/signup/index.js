import React from 'react'
import Head from 'next/head'
import SignupForm from '../../components/Signup/SignupForm'
import Header from '../../components/Header/Header'


export default function SignUp() {
    return (
            <main className='flex justify-center h-screen bg-secondary lg:bg-white lg:h-full lg:pb-8'>
                <div className='flex flex-col items-center justify-start w-full   pt-12 lg:bg-secondary box-border  lg:mt-12 lg:w-34 lg:rounded-sm'>
                    <h2 className=' text-1.5  mb-4'>Sign Up</h2>
                    <SignupForm />
                </div>

            </main>
    )
}

