import gql from 'graphql-tag'

export default gql`
  query getTweets($limit: Int! = 2, $offset: Int! = 0) {
    getTweets(limit: $limit, offset: $offset){
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