import Header from '../../components/Header/Header'
import LoginForm from '../../components/Login/LoginForm'
import Head from 'next/head'

export default function Login() {
    return (
            <main className='flex justify-center h-screen lg:h-full'>
                <div className='flex flex-col items-center justify-start w-full  bg-secondary h-screen lg:h-auto lg:mb-60 lg:mt-12 lg:w-34 lg:rounded-sm'>
                    <h2 className='hidden lg:block text-1.5 mb-6 mt-16'>Login</h2>
                    <LoginForm />
                </div>

            </main>
    
    )
}