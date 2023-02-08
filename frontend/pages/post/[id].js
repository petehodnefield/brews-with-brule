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
  // if(data.id.length === 0) return <h2>404 | Not Found</h2>

  return (
    <div>
      <h2>
      
      </h2>
    </div>
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