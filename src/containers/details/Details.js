import React from 'react'
import { Item } from 'semantic-ui-react'
import Tweet from '../../components/Tweet'
import { HomeContainer, HomePanel } from './style'
import Spinner from '../../components/Spinner'


function Details({tweet, tweetLoading}) {

  const getContent = () => {
    if(tweetLoading) return <Spinner />
    const { id, text, likes, createdAt, user: {id: userId, username, avatar}} = tweet.getTweet
    return <Tweet createdAt={createdAt} showCommentsAlways={true} key={id} id={id} userId={userId} likes={likes} tweet={text} avatar={avatar} name={username} ></Tweet>
  }
  return (
    <HomeContainer>
      <HomePanel>
        <Item.Group>
          {getContent()}
        </Item.Group>
      </HomePanel>
    </HomeContainer>
  )
}

export default Details
