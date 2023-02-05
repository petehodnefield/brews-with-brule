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
        }
    }
`