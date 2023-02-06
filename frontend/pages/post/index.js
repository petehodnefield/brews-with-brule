import React, { FC } from 'react'
import Head from 'next/head'
import PostForm from '../../components/Post/PostForm'
import Header from '../../components/Header/Header'


const post = () => {
 

    return (
            <main>
                <div className='flex flex-col items-center justify-center pt-12'>
                    <h2 className='font-semibold text-1.5 mb-8 lg:mb-4'>Create a post</h2>
                    <PostForm  />
                </div>
            </main>
        
    )
}

export default post