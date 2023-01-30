import React, { FC } from 'react'
import Head from 'next/head'
import PostForm from '../../components/Post/PostForm'
import Header from '../../components/Header/Header'


const post = () => {
    const handlePostSubmit = (e) => {
        e.preventDefault()
        fetch(`/api/posts/`, {
            method: "POST",
            body: JSON.stringify({
                title: "hi there",
                description: 'This is my description',
                location: "Stillwater, MN",
                user_id: 1
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.log(err))
    }

    return (
            <main>
                <div className='flex flex-col items-center justify-center pt-12'>
                    <h2 className='font-semibold text-1.5 mb-8 lg:mb-4'>Create a post</h2>
                    <PostForm handlePostSubmit={handlePostSubmit} />
                </div>
            </main>
        
    )
}

export default post