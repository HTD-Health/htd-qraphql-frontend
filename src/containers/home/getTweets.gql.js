import gql from 'graphql-tag'

export default gql`
  query getTweets {
    getTweets {
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