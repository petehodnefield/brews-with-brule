import React from 'react'

const Contact = () => {
  return (
    <section className='pt-4 bg-secondary h-screen'>
        <div className='bg-primary text-white flex flex-col items-center pt-6 pb-12'>
            <h2 className='font-semibold text-1.5 mb-4'>
                Contact us
            </h2>
            <form className='w-full px-6'>
                <div className='flex flex-col mb-6'>
                    <label for='name' className='font-semibold text-0.875'>Your name</label>
                    <input maxLength='30' type='text' name='name' className='h-12 rounded-lg text-dark px-4 border-light border-1'></input>
                </div>
                <div className='flex flex-col mb-6'>
                    <label for='email' className='font-semibold text-0.875'>Your email</label>
                    <input maxLength='30' type='email' name='email' className='h-12 rounded-lg text-dark px-4 border-light border-1'></input>
                </div>
                <div className='flex flex-col mb-6'>
                    <label for='message' className='font-semibold text-0.875'>Your message</label>
                    <textarea className='rounded-lg h-24 p-4 font-semibold text-0.875 border-solid border-light border-2 text-dark' name='username' ></textarea>
                </div>
                <button className='w-full bg-dark h-12 rounded-lg'>Send</button>
            </form>
        </div>
    </section>
  )
}

export default Contact