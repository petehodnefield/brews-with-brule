import React, {useState} from 'react'
import { useMutation, gql } from '@apollo/client'
import { LOGIN_USER } from '../../utils/mutations'
import Auth from '../../utils/auth'
import Link from 'next/link'

const LoginForm = () => {

    const inputStyle = 'outline-none rounded-lg h-12 p-4 font-semibold text-0.875 focus:outline-primary ease-in	duration-200'
    const [formState, setFormState] = useState({username: '', password: ''})

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
        ...formState,
        [name]: value,
        });
    };

    const [login, {error}] = useMutation(LOGIN_USER)

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
        const {data} = await login({
            variables: {...formState}
        })

        Auth.login(data.login.token)
        console.log(data.login.token)
        } catch(e) {
            console.log(e, 'hi')
        console.error(e)
        }

        // clear form values
        setFormState({
            username: '',
            password: '',
        });
    };


    return (
        <form 
            id='signIn' 
            className='flex flex-col items-center w-full px-6 pt-12 pb-4 lg:pt-0 md:w-30 lg:w-34'
            onSubmit={handleFormSubmit}
        >
            <div className='flex items-left flex-col mb-6 w-full lg:w-80'>
                <label className='font-semibold text-0.875 mb-1'>Username</label>
                <input 
                    required
                    className={`${inputStyle}`} 
                    name='username' 
                    type='text'
                    value={formState.username}
                    onChange={handleChange}>

                </input>
            </div>
            <div className='flex items-left flex-col mb-8 w-full  lg:w-80'>
                <label className='font-semibold text-0.875 mb-1'>Password</label>
                <input 
                    required
                    className={`${inputStyle}`} 
                    name='password'
                    type='password'
                    value={formState.password}
                    onChange={handleChange}
                ></input>
            </div>
            {/* <button className='mb-6 bg-white h-12 rounded border-solid border border-medium w-full lg:w-80 ' >I am not a robot</button> */}
            <button type='submit' className='rounded bg-primary mb-2 h-12 text-white text-1 font-semibold w-full lg:w-60 lg:rounded-full lg:mb-3'>Login</button>
            <Link className='w-full lg:w-60 ' href='/signup'><button type='button' className='w-full border-medium border-1 rounded bg-white h-12 text-dark text-1 font-semibold w-full  lg:rounded-full lg:mb-6'>Sign up</button></Link>
            {error && <p className='mt-4 lg:mt-0 lg:w-4/5 font-semibold text-left lg:text-center mb-4'>Your username or password does not match any records in our system. Please try again.</p>}

        </form>
    )
}

export default LoginForm