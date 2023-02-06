import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router'
import React, {useState, useEffect} from 'react'
import { SINGLE_POST } from '../../utils/queries';

const PostDetails = (props) => {
  console.log(props)
  const urlID = useRouter().query.id

  const [postID, setPostID] = useState('')
  useEffect(() => {
    setPostID(urlID)
  }, [])
  console.log(postID)

  return (
    <div>
      <h2>

      </h2>
    </div>
  )
}

export default PostDetails