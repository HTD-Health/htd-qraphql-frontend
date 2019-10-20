import LikeButton from './LikeButton'
import React from 'react'
import { Mutation } from 'react-apollo'

import LIKE_TWEET from './like.gql'
import formatGraphqlErrors from '../../utils/formatGraphqlErrors'

const withMutation = Component => props => {
  const id = props.id
  return <Mutation variables={{id}} mutation={LIKE_TWEET}>
  {(mutate,{loading, error}) => (
    <Component
      {...props}
      likeTweet={mutate}
      likeLoading={loading}
      likeError={formatGraphqlErrors(error)}
    />
  )}

  </Mutation>
}
export default withMutation(LikeButton)