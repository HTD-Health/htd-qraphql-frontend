import React from 'react'
import {Query, Mutation} from 'react-apollo'

import formatGraphqlErrors from '../../utils/formatGraphqlErrors'
import Home from './Home'
import GET_TWEETS from './getTweets.gql'
import ADD_TWEET from './addTweet.gql'

const withQuery = Component => props => (
  <Query query={GET_TWEETS} >
    {({ loading, error, data }) => (
      <Component 
        {...props} 
        tweets={data} 
        tweetsLoading={loading} 
        tweetsError={formatGraphqlErrors(error)} 
      />
    )}
  </Query>
)

const withMutation = Component => props => (
  <Mutation mutation={ADD_TWEET} refetchQueries={['getTweets']}>
    {(mutate, {loading, error}) => (
      <Component
        {...props}
        addTweet={mutate} 
        newTweetLoading={loading} 
        newTweetError={formatGraphqlErrors(error)} 
      />
    )}
  </Mutation>
)

export default withMutation(withQuery(Home))
