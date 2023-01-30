import React from 'react'

const LoginForm = () => {
    return (
        <form id='signIn' className='flex flex-col items-center w-full px-6 pt-12 lg:pt-0 md:w-30 lg:w-34'>
            <div className='flex items-left flex-col mb-8 w-full lg:w-80'>
                <label className='font-semibold text-0.875 mb-1'>Username</label>
                <input className='rounded-lg h-12 p-4 font-semibold text-0.875' name='username' type='text'></input>
            </div>
            <div className='flex items-left flex-col mb-8 w-full  lg:w-80'>
                <label className='font-semibold text-0.875 mb-1'>Password</label>
                <input className='rounded-lg h-12 p-4 font-semibold text-0.875' name='password' type='password'></input>
            </div>
            <button className='mb-6 bg-white h-12 rounded border-solid border border-medium w-full lg:w-80 ' >I am not a robot</button>
            <button type='submit' className='rounded bg-primary h-12 text-white text-1 font-semibold w-full lg:w-44 lg:rounded-full lg:mb-6'>Sign in</button>
        </form>
    )
}

export default LoginForm