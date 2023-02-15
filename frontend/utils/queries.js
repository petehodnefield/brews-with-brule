import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query Query {
    me {
      _id
      username
      email
      bio
    }
  }
`
export const USERS = gql`
  query Users {
    users {
      _id
      username
      email
      bio
      posts {
        _id
        title
        description
        location
        image
    
        createdAt
      }
    }
  }
`

export const SINGLE_USER = gql`
  query Query($id: ID!) {
    user(_id: $id) {
      _id
      username
      email
      bio
      posts {
        _id
        title
        description
        location
        image
      }
      friends {
        _id
        username
      }
    }
  }
`

export const POSTS = gql`
    query Query {
        posts {
            _id
            description
            location
            reactions {
                _id
                username
            }
            title
            image
            createdAt
        }
    }
`

export const SINGLE_POST = gql`
query Query($id: ID!) {
    post(_id: $id) {
      _id
      title
      description
      location
      image
      reactions {
        _id
        reactionBody
        createdAt
        username
      }
      createdAt
    }
  }
`

export const BREWERIES = gql`
    query Query {
        breweries {
            _id
            name
            description
            location
            optionsAvailable
            price
            rating
            image
            hours
        }
    }
`
export const SINGLE_BREWERY = gql`
query Query($id: ID!) {
    brewery(_id: $id) {
      _id
      name
      description
      location
      hours
      optionsAvailable
      price
      rating
      image
    }
  }
`
