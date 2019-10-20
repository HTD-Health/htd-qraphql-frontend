import React from 'react'
import { Item } from 'semantic-ui-react'
import Tweet from '../../components/Tweet'
import { HomeContainer, HomePanel } from './style'
import Spinner from '../../components/Spinner'


function AuthorsPosts({tweets, tweetsLoading, tweetsError}) {
  const renderTweet = ({ id, text, likes, createdAt }) => {
    const {id: userId, username, avatar} = tweets.getUser
    return <Tweet key={id} createdAt={createdAt} id={id} userId={userId} likes={likes} tweet={text} avatar={avatar} name={username} ></Tweet>
  }

  return (
    <HomeContainer>
      <HomePanel>
        <Item.Group>
          {tweetsLoading && <Spinner />}
          {tweets && tweets.getUser && tweets.getUser.tweets.map(renderTweet)}
        </Item.Group>
      </HomePanel>
    </HomeContainer>
  )
}

export default AuthorsPosts
