import React from 'react'
import {Query} from 'react-apollo'

import formatGraphqlErrors from '../../utils/formatGraphqlErrors'
import Home from './Home'
import GET_TWEETS from './getTweets.gql'

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

export default withQuery(Home)
