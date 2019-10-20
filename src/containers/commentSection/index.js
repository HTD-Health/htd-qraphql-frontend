import React from 'react'
import CommentSection from "./commentSection"
import GET_COMMENTS from './getComments.gql'
import ADD_COMMENT from './addComment.gql'
import { Query, Mutation } from 'react-apollo'
import formatGraphqlErrors from '../../utils/formatGraphqlErrors'

// tweetId = props.tweetId

//pobieranie komentarzy
// comments - listaKomentarzy 
// commentsLoading - ladowanie

const withQuery = Component => props => {
  const tweetId = props.tweetId
  return <Query query={GET_COMMENTS} variables={{id: tweetId}}>
    {({data, loading, error}) => (
      <Component 
        {...props} 
        comments={data} 
        commentsLoading={loading}
        commentsError={formatGraphqlErrors(error)}
      />
    )}
  </Query>
}


//Dodawanie komenatrzy mutacje
// addComment

const withMutation = Component => props => {
  const tweetId = props.tweetId
  return <Mutation mutation={ADD_COMMENT}
    refetchQueries={[{
      query: GET_COMMENTS,
      variables: {id: tweetId}
    }]}
    variables={{tweetId}}>
    {(mutate, {loading, error}) => (
      <Component
        {...props}
        addComment={mutate}
        newCommentLoading={loading}
        newCommentError={error}
      />
    )}
  </Mutation>
}

export default withMutation(withQuery(CommentSection))
