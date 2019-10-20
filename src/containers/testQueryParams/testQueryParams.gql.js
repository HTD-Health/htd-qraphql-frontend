import gql from 'graphql-tag'

export default gql`
  query helloWorldParams($name: String!){
    helloWorldParams(name: $name)
  }
`