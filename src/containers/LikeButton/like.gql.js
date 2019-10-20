import gql from 'graphql-tag'

export default gql`
mutation likeTweet($id: String!) {
  likeTweet(id: $id) {
    id
    likes
  }
}
`