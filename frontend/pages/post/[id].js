import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router'
import React, {useState, useEffect} from 'react'
import { SINGLE_POST } from '../../utils/queries';
import { initializeApollo } from '../../lib/apollo'


const PostDetails = ({queryID}) => {
  const {data, loading, error} = useQuery(SINGLE_POST, {
    variables: {id: queryID}
  })

  if(loading) return <h1> Loading...</h1>
  if(error || !data) return <h1> Error</h1>
  if(data.post.length === 0) return <h2>404 | Not Found</h2>
  const {title, createdAt, description, location, image} = data.post


  return (
    <article className='h-screen'>
      <div 
        className='relative h-80 w-full bg-cover bg-center mb-8' 
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1600788886242-5c96aabe3757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80})` }}>
      </div>
      {/* Text wrapper */}
      <div className='px-6 mb-10'>
        <h2 className='text-primary font-bold text-1.5 mb-2'>
          {title}
        </h2>
        <p className=' font-bold text-0.75 mb-2'>{createdAt}</p>
        <p className='  text-0.875  mb-2'>{description}</p>
        <p className='  text-0.75 text-medium'>{location}</p>
      </div>
      {/* Members Wrapper */}
      <div>
        <h3 className='text-1 font-bold mb-1 pl-4'>Members in this photo:</h3>
        {/* Friends row */}
        <div className='flex items-center border-t-1 border-b-1 border-light p-4'>
          <div  
            className='relative h-12 w-12 bg-cover bg-center mr-4' 
            // Replace bgimage with the friends profile picture
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1600788886242-5c96aabe3757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80})` }}></div>
          <p className='text-1 font-bold '>Max Friedrich</p>
        </div>
        <div className='flex items-center border-t-1 border-b-1 border-light p-4'>
          <div  
            className='relative h-12 w-12 bg-cover bg-center mr-4' 
            // Replace bgimage with the friends profile picture
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1600788886242-5c96aabe3757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80})` }}></div>
          <p className='text-1 font-bold '>Logan Swanson</p>
        </div>
        <div className='flex items-center border-t-1 border-b-1 border-light p-4'>
          <div  
            className='relative h-12 w-12 bg-cover bg-center mr-4' 
            // Replace bgimage with the friends profile picture
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1600788886242-5c96aabe3757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80})` }}></div>
          <p className='text-1 font-bold '>Tanner Greeley</p>
        </div>
      </div>
    </article>
  )
}

export const getServerSideProps = async({query}) => {
  const queryID = query.id

  const apolloClient = initializeApollo()
  await apolloClient.query({
      query: SINGLE_POST,
      variables: {id: queryID},
  })
  return {
      props: {initializeApolloState: apolloClient.cache.extract(), queryID}
  }
}

export default PostDetails