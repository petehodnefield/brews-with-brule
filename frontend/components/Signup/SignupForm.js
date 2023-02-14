import React, {useState} from 'react'
import { useMutation } from '@apollo/client';

import Auth from '../../utils/auth'
import { CREATE_USER } from '../../utils/mutations'
import Link from 'next/link';

const SignupForm = () => {
    const inputStyle = 'outline-none rounded-lg h-12 p-4 font-semibold text-0.875 focus:outline-primary ease-in	duration-200'

    const [formState, setFormState] = useState({ username: '', email: '', password: '' });

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
  
        setFormState({
        ...formState,
        [name]: value,
        });
  
  
    };
    
    const [addUser, {error}] = useMutation(CREATE_USER)
    // submit form (notice the async!)
    const handleFormSubmit = async event => {
        event.preventDefault();
    
        // use try/catch instead of promises to handle errors
        try {
        // execute addUser mutation and pass in variable data from form
        const { data } = await addUser({
            variables: { ...formState }
        });
    
    
        Auth.login(data.addUser.token)
        } catch (e) {
            console.error(e);
        }
    };
  

    return (
        <form id='signIn' className='flex flex-col items-center w-full px-6  lg:pt-0 md:w-30 lg:w-34' onSubmit={handleFormSubmit}>
            <div className='flex items-left flex-col mb-8 w-full lg:w-80'>
                <label className='font-semibold text-0.875 mb-1'>Username</label>
                <input 
                    required
                    className={inputStyle} 
                    name='username' type='text'
                    value={formState.username}
                    onChange={handleChange}></input>
            </div>

            {/* Email group */}
            <div className='flex items-left flex-col mb-4 w-full lg:w-80'>
                <label className='font-semibold text-0.875 mb-1'>Email Address</label>
                <input 
                    required
                    className={inputStyle} 
                    name='email' 
                    type='email'
                    value={formState.email}
                    onChange={handleChange}
                ></input>
            </div>
            <div className='flex items-left flex-col mb-8 w-full lg:w-80'>
                <label className='font-semibold text-0.875 mb-1'>Confirm Email Address</label>
                <input 
                    required
                    className={inputStyle} 
                    name='emailConfirm' 
                    type='email'
                ></input>
            </div>
            {/* Password group */}
            <div className='flex items-left flex-col mb-4 w-full  lg:w-80'>
                <label className='font-semibold text-0.875 mb-1'>Create Password</label>
                <input 
                    required
                    className={inputStyle} 
                    name='password' 
                    type='password'
                    value={formState.password}
                    onChange={handleChange}
                ></input>
            </div>
            <div className='flex items-left flex-col mb-6 w-full  lg:w-80'>
                <label className='font-semibold text-0.875 mb-1'>Confirm Password</label>
                <input 
                    required
                    className={inputStyle} 
                    name='passwordConfirm' 
                    type='password'
                ></input>
            </div>
            {/* <button className='mb-6 bg-white h-12 rounded border-solid border border-medium w-full lg:w-80 ' >I am not a robot</button> */}
            <p className='font-semibold text-0.875 mb-4'>Already have an account? <span className='text-primary underline font-bold'><Link href='/login'>Login</Link></span>  </p>

            <button type='submit' className='rounded bg-primary h-12 text-white text-1 font-semibold w-full lg:w-44 lg:rounded-full lg:mb-6'>Create account</button>
            
            {error && <div>Sign up failed</div>}

        </form>
        )
}

export default SignupForm