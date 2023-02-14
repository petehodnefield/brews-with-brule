import {gql} from '@apollo/client'

export const LOGIN_USER = gql`
    mutation Mutation($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
            user {
                _id
                username
                email
                bio
            
            }
        }
    }
`

export const CREATE_USER = gql`
    mutation Mutation($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`

export const CREATE_POST = gql`
mutation AddPost($userId: ID!, $title: String!, $description: String!, $location: String!, $image: String!) {
    addPost(user_id: $userId, title: $title, description: $description, location: $location, image: $image) {
      _id
      title
      description
      location
      image
      createdAt
    }
  }
`