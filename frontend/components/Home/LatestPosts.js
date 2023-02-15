import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { POSTS } from '../../utils/queries'
import Link from 'next/link'
import { initializeApollo } from '../../lib/apollo'
import auth from '../../utils/auth'

const LatestPosts = () => {
    const {loading, error, data} = useQuery(POSTS)
    
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    const posts = data.posts

    return (
        <section className='flex flex-col items-center justify-start  lg:py-8'>
            <h3 className='font-semibold md:font-normal text-1 mb-6 md:text-1.5'>Latest Posts</h3>
            
            <div className='flex flex-col items-start justify-start px-6 md:grid lg:justify-center lg:justify-items-center	 md:justify-center w-full md:grid-cols-2 lg:grid-cols-3	lg:grid-flow-row	lg:gap-y-8  mb-12 lg:mb-0'>
                {posts.map(post => (
                    <article key={post.title} className='w-full md:w-96 px-8 flex flex-col items-center justify-start mb-8 lg:mb-0'>
                        <div className='relative h-56 w-full bg-cover bg-center mb-4' style={{ backgroundImage: `url(https://images.unsplash.com/photo-1600788886242-5c96aabe3757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80})` }}>
                                <Link href={`${auth.loggedIn() ? `/post/${post._id}`: '/login'}`} className=' absolute bottom-0 right-0'>
                                    <button className='  h-10 bg-primary text-white  font-semibold text-0.875 w-28'>Full Post</button>
                                </Link>
                         
                        
                        </div>
                        <p className='font-bold text-1 mb-2'>{post.title}</p>
                        <div className='w-full flex flex-col items-start justify-start '>
                            <p className=' text-0.875 mb-6'>{post.description}</p>
                            <p className='font-semibold text-0.75 mb-2'>Posted on {post.createdAt}</p>
                            <p className=' text-0.75 text-primary font-semibold'>📍 {post.location}</p>
                        </div>
                    </article>

                ))}
            </div>
       
        </section>
    )
}

export const getStaticProps = async() => {
    const apolloClient = initializeApollo()
    await apolloClient.query({
        query: POSTS,
    })
    return {props: {initialApolloState: apolloClient.cache.extract()}}
}


export default LatestPosts