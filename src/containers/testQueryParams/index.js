import React from 'react'
import { ApolloConsumer} from 'react-apollo'

import TestQueryParams from './testQueryParams'

const consumer = () => ( <ApolloConsumer >
  {client => (
    <TestQueryParams client={client} />
  )}
</ApolloConsumer> )

export default consumer