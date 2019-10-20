import gql from 'graphql-tag'


export default gql`
  mutation addTweet($text: String!, $username: String!){
    addTweet(username:$username, text:$text) {
      id
    }
  }
`