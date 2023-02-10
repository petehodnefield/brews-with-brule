import React, {useState} from 'react'

const Contact = () => {
    const [formMessage, setFormMessage] = useState('')
    const handleFormSubmit = (e) => {
        e.preventDefault()
        setFormMessage('Thank you for contacting us! We have received your messsage and will get back to you as soon as we can.')
        setTimeout(() => {
            window.location.replace('/')

        }, 3000)
    }
  return (
    <section className='pt-4 bg-secondary h-screen lg:flex lg:justify-center '>
        <div className=' rounded-lg bg-primary text-white flex flex-col items-center pt-6 pb-12 lg:w-34 lg:h-min'>
            <h2 className='font-semibold text-1.5 mb-4'>
                Contact us
            </h2>
            <form onSubmit={handleFormSubmit} className='w-full px-6 md:w-3/5 lg:px-0 pb-8'>
                <div className='flex flex-col mb-6'>
                    <label for='name' className='font-semibold text-0.875'>Your name</label>
                    <input required maxLength='30' type='text' name='name' className=' font-semibold h-12 rounded-lg text-dark px-4 border-light border-1 text-0.875'></input>
                </div>
                <div className='flex flex-col mb-6'>
                    <label for='email' className='font-semibold text-0.875'>Your email</label>
                    <input required maxLength='30' type='email' name='email' className=' font-semibold h-12 rounded-lg text-dark px-4 border-light border-1 text-0.875'></input>
                </div>
                <div className='flex flex-col mb-6'>
                    <label for='message' className='font-semibold text-0.875'>Your message</label>
                    <textarea required className='rounded-lg h-24 p-4 font-semibold text-0.875 border-solid border-light border-2 text-dark' name='username' ></textarea>
                </div>
                <button className={`w-full bg-dark h-12 rounded-lg ${formMessage ? 'mb-6': ''}`}>Send</button>
                {!formMessage ? '' : <p className='text-dark font-semibold'>{formMessage}</p>}
            </form>
        </div>
    </section>
  )
}

export default Contact