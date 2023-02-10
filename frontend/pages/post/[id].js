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


  const friendRowStyles = 'flex items-center border-t-1  border-light p-4  md:px-12'
  const friendRowImageStyles = 'relative h-12 w-12 bg-cover bg-center mr-4'

  return (
    <section className='h-full lg:flex lg:justify-center lg:h-eightyvh' >
      <article className=' lg:flex lg:w-70 lg:justify-center lg:py-12'>
        <div className='flex flex-col justify-start'>
          <div
            className='relative h-80 w-full bg-cover bg-center mb-8 lg:h-60 lg:w-96 lg:mb-12'
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1600788886242-5c96aabe3757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80})` }}>
          </div>
          {/* Text wrapper */}
          <div className='px-6 mb-10 md:px-12 lg:pl-0'>
            <h2 className='text-primary font-bold text-1.5 mb-2'>
              {title}
            </h2>
            <p className=' font-bold text-0.75 mb-2 lg:mb-3'>Posted on {createdAt}</p>
            <p className='  text-0.875  mb-2 lg:mb-3'>{description}</p>
            <p className='  text-0.75 text-medium'>📍 {location}</p>
          </div>
        </div>
        {/* Members Wrapper */}
        <div className=' border-b-1 pb-12'>
          <h3 className='text-1 font-bold mb-1 pl-4 md:pl-12'>Members in this photo:</h3>
          {/* Friends row */}
          <div className={friendRowStyles}>
            <div
              className={friendRowImageStyles}
              // Replace bgimage with the friends profile picture
              style={{ backgroundImage: `url(https://scontent.ffcm1-2.fna.fbcdn.net/v/t1.6435-9/165241271_431549701271912_2625513840547112030_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=TyX0_-mfcXwAX_bhcnU&tn=yEYvnZYNnrftvpVP&_nc_ht=scontent.ffcm1-2.fna&oh=00_AfAk6YqB4JikztLjnZNUOqEo8FUaHvEbmuZ7w_zlb386XQ&oe=640DC5E8)` }}></div>
            <p className='text-1 font-bold '>Max Friedrich</p>
          </div>
          <div className={friendRowStyles}>
            <div
              className={friendRowImageStyles}
              // Replace bgimage with the friends profile picture
              style={{ backgroundImage: `url(https://scontent.ffcm1-2.fna.fbcdn.net/v/t1.18169-9/200153_196302710400055_177430_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=de6eea&_nc_ohc=pMvalZim2WcAX_WkW7c&_nc_ht=scontent.ffcm1-2.fna&oh=00_AfDk0jdfSeo5Zr6qXY3gZNjxkQXgQF0YGG0Gd9QUFLQkKQ&oe=640DDE61)` }}></div>
            <p className='text-1 font-bold '>Logan Swanson</p>
          </div>
          <div className={friendRowStyles}>
            <div
              className={friendRowImageStyles}
              // Replace bgimage with the friends profile picture
              style={{ backgroundImage: `url(https://scontent.ffcm1-1.fna.fbcdn.net/v/t39.30808-6/328685291_716538380118573_7762206676870267551_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=iVAddxd0LZQAX8ni2R4&_nc_ht=scontent.ffcm1-1.fna&oh=00_AfB8ebRnm9In09dgWurHfDEbPBJZ3RG453J0-S3tby4MzQ&oe=63EC2FF5)` }}></div>
            <p className='text-1 font-bold '>Tanner Greeley</p>
          </div>
        </div>
      </article>
    </section>
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