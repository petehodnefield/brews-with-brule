import React, {useState} from 'react'
import PostFriendsList from './PostFriendsList'


const PostForm = () => {
    const [postInfo, setPostInfo] = useState({
        title: '',
        description: '',
        location: '',
        photo: ''
    })
    console.log(postInfo)

    const handleChange = (e) => {
        console.log(e.target.value)
        const {name: value} = e.target
        setPostInfo(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handlePostSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form action='/api/posts' method='post' onSubmit={(e) => handlePostSubmit(e)} id='postForm' className='w-full px-6 flex flex-col items-center justify-center md:w-3/5'>
            <div className='flex items-left flex-col mb-8 w-full lg:w-80'>
                <div className='flex justify-between items-center w-full mb-1'>
                    <label className='font-semibold text-0.875 '>Title</label>
                    <p className='text-0.875 text-medium italic'>40/40 remaining</p>
                </div>
                <input className='rounded-lg h-12 p-4 font-semibold text-0.875 border-solid border-light border-2' name='username' type='text' placeholder='ex: Celebrating with 4 tall Hamms...' onChange={handleChange}></input>
            </div>
            <div className='flex items-left flex-col mb-8 w-full lg:w-80'>
                <div className='flex justify-between items-center w-full mb-1'>
                    <label className='font-semibold text-0.875 '>Description</label>
                    <p className='text-0.875 text-medium italic'>160/160 remaining</p>
                </div>
                <textarea className='rounded-lg h-24 p-4 font-semibold text-0.875 border-solid border-light border-2' name='username' ></textarea>
            </div>
            <div className='flex items-left flex-col mb-8 w-full lg:w-80'>

                <label className='font-semibold text-0.875  mb-1 '>Location</label>
                <input className='rounded-lg h-12 p-4 font-semibold text-0.875 border-solid border-light border-2' name='location' type='text' placeholder="City, State"></input>
            </div>
            <div className='flex items-left flex-col mb-4 w-full lg:w-80'>

                <label className='font-semibold text-0.875  mb-1 '>Photo</label>
                <input type="file" className='h-12'>
                </input>
            </div>
            <div className='flex items-center justify-center gap-24  mb-4 w-full lg:w-80'>
                <p>Tag a friend(s)</p>
                <div className=' w-16 h-10 border-solid border-light border-2 rounded-full flex items-center justify-end'>
                    <div className='bg-primary rounded-full h-8 w-8 mr-1'></div>
                </div>
            </div>

            {/* FRIENDS LIST */}
            <PostFriendsList />

            {/* SUBMIT BTN */}
            <button type='submit' className='bg-primary w-44 h-12 text-white mb-12 lg:w-80'>Submit</button>
        </form>)
}

export default PostForm