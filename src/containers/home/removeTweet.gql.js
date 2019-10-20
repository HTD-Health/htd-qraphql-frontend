import gql from 'graphql-tag'

export default gql`
mutation removeTweet($id: String!){
  removeTweet(id: $id) {
    id
  }
}

`