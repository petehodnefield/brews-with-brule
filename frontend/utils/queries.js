import { gql } from "@apollo/client";

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