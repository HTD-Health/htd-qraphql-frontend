import React from 'react'
import {Query, Mutation} from 'react-apollo'

import formatGraphqlErrors from '../../utils/formatGraphqlErrors'
import Home from './Home'
import GET_TWEETS from './getTweets.gql'
import ADD_TWEET from './addTweet.gql'
import REMOVE_TWEET from './removeTweet.gql'

const withQuery = Component => props => (
  <Query query={GET_TWEETS}>
    {({ loading, error, data, fetchMore }) => (
      <Component 
        {...props} 
        tweets={data} 
        tweetsLoading={loading} 
        tweetsError={formatGraphqlErrors(error)}
        fetchMore={fetchMore}
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

const removeMutation = Component => props => (
  <Mutation mutation={REMOVE_TWEET} refetchQueries={['getTweets']}>
    {(mutate, {loading, error}) => (
      <Component
        {...props}
        removeTweet={mutate} 
        removeTweetLoading={loading} 
        removeTweetError={formatGraphqlErrors(error)} 
      />
    )}
  </Mutation>
)

export default removeMutation(withMutation(withQuery(Home)))
