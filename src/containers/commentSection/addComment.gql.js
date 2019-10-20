import gql from 'graphql-tag'

export default gql`
  mutation comment($tweetId: String!, $username: String!, $commentText: String!) {
    addComment(tweetId: $tweetId, username: $username, commentText: $commentText) {
      id
    }
  }
`