import Head from 'next/head'

export default function Login() {
    return (
        <>
            <Head>
                <title>Brews With Brule</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='flex justify-center h-screen'>
                <div className='flex flex-col items-center justify-start w-full  bg-secondary h-screen lg:h-auto lg:mb-60 lg:mt-12 lg:w-34 lg:rounded-sm'>
                    <h2 className='hidden lg:block text-1.5 mb-6 mt-16'>Login</h2>
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
                </div>

            </main>
        </>
    )
}