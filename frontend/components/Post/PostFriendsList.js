
import React from 'react'

const PostFriendsList = () => {
    return (
        <section className='w-full border-light border-solid border-t-2 mb-8  lg:w-80'>
            <div className='flex justify-between items-center w-full border-light border-solid border-b-2 py-4	px-4'>
                <div className='flex items-center'>
                    <img className='h-16 rounded-lg' src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' />
                    <h4 className='w-60 ml-4'>Max Friedrich</h4>
                </div>
                <div className='h-6 w-6  border-light border-2'></div>
            </div>
            <div className='flex justify-between items-center w-full border-light border-solid border-b-2 py-4	px-4'>
                <div className='flex items-center'>
                    <img className='h-16 rounded-lg' src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' />
                    <h4 className='w-60 ml-4'>Logan Swanson</h4>
                </div>
                <div className='h-6 w-6  border-light border-2'></div>
            </div>
            <div className='flex justify-between items-center w-full border-light border-solid border-b-2 py-4 px-4	'>
                <div className='flex items-center'>
                    <img className='h-16 rounded-lg' src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' />
                    <h4 className='w-60 ml-4'>Tanner Greeley</h4>
                </div>
                <div className='h-6 w-6  border-light border-2'></div>
            </div>
        </section>
    )
}

export default PostFriendsList