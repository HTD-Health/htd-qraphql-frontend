import gql from 'graphql-tag'

export default gql`
  query getComments($id: String!) {
    getTweet(id: $id) {
      id
      comments {
        createdAt
        text
        user {
          username
        }
      }
    }
  }
`