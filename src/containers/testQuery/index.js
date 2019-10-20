// Prosze przygotować home/index.js na 
// podstawie pliku testQuery/index.js


import React from 'react'
import {Query} from 'react-apollo'
import formatGraphqlErrors from '../../utils/formatGraphqlErrors'
import TestQuery from './testQuery'
import TEST_QUERY from './testQuery.gql'

const withQuery = Component => props => (
  <Query query={TEST_QUERY}>
    {({ loading, error, data }) => (
      <Component 
        {...props} 
        response={data} 
        loading={loading} 
        error={formatGraphqlErrors(error)} 
      />
    )}
  </Query>
)

export default withQuery(TestQuery)
