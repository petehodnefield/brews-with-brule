import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { POSTS } from '../../utils/queries'
import Link from 'next/link'
import { initializeApollo } from '../../lib/apollo'

const LatestPosts = () => {
    const {loading, error, data} = useQuery(POSTS)
    
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    const posts = data.posts
    console.log(posts)

    return (
        <section className='flex flex-col items-center justify-start px-6 lg:pt-8'>
            <h3 className='font-semibold lg:font-normal text-1 mb-6 lg:text-1.5'>Latest Posts</h3>
            
            <div className='flex flex-col items-center justify-start  lg:grid lg:justify-center lg:justify-items-center	 md:justify-center w-full lg:grid-cols-2	lg:grid-flow-row	lg:gap-y-8  mb-12 lg:mb-0'>
                {posts.map(post => (
                    <article key={post.title} className='md:w-96 flex flex-col items-center justify-start mb-8 lg:mb-0'>
                        <div className='relative h-56 w-4/5 bg-cover bg-center mb-4' style={{ backgroundImage: `url(https://images.unsplash.com/photo-1600788886242-5c96aabe3757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80})` }}>
                            <Link href={`/post/${post._id}`} className=' absolute bottom-0 right-0'>
                                <button className='  h-10 bg-primary text-white  font-semibold text-0.875 w-28'>Full Post</button>
                            </Link>
                        </div>
                        <p className='font-semibold text-0.875 mb-2'>{post.title}</p>
                        <div className='flex flex-col items-start justify-start lg:px-8'>
                            <p className=' text-0.875 mb-6'>{post.description}</p>
                            <p className='font-semibold text-0.75 mb-2'>Posted on {post.createdAt}</p>
                            <p className=' text-0.75 text-primary'>{post.location}</p>
                        </div>
                    </article>

                ))}
            </div>
            <div className='flex flex-col items-center justify-start  lg:grid lg:justify-center lg:justify-items-center	 md:justify-center w-full lg:grid-cols-2	lg:grid-flow-row	lg:gap-y-8  mb-12 lg:mb-0'>
                
                <article className='md:w-96 flex flex-col items-center justify-start mb-8 lg:mb-0'>
                    <div className='relative h-56 w-4/5 bg-cover bg-center mb-4 ' style={{ backgroundImage: `url(https://images.unsplash.com/photo-1600788886242-5c96aabe3757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80})` }}>
                        <a className='hidden lg:block absolute bottom-0 right-0'>
                            <button className='  h-10 bg-primary text-white  font-semibold text-0.875 w-28'>Full Post</button>
                        </a>
                    </div>
                    <p className='font-semibold text-0.875 mb-2'>BWB celebrating Honch’s birthday</p>
                    <div className='flex flex-col items-start justify-start lg:px-8'>
                        <p className=' text-0.875 mb-6'>A group of friends gather at a local bar to celebrate one of their birthdays. The atmosphere is lively, with the smell of wings and the sound of TVs playing sports games in the background. </p>
                        <p className='font-semibold text-0.75 mb-2'>Posted on November 7, 2022 by @steviebrule </p>
                        <p className=' text-0.75 text-primary'>Brian’s Bar - Stillwater, MN </p>
                    </div>
                </article>
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