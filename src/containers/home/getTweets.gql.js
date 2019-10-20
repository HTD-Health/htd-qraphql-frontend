import gql from 'graphql-tag'

export const paginationLimit = 5;

export default gql`
  query getTweets($limit: Int! = ${paginationLimit}, $offset: Int! = 0) {
    getTweets(limit: $limit, offset: $offset) {
      text
      id
      likes
      createdAt
      user {
        id
        username
      }
    }
  }
` 