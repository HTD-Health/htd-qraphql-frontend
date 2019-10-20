import React, {useState} from 'react'
import { useHistory, useLocation } from "react-router-dom"
import { Button, Icon, Item } from "semantic-ui-react"
import Harold from '../assets/Avatar.jpg'
import CommentSection from '../containers/commentSection'
import TweetModal from './TweetModal'
import LikeButton from '../containers/LikeButton'

export const Tweet = ({ id, tweet, avatar, name, time, userId, showCommentsAlways, withModal, likes , createdAt, removeTweet}) => {
  const history = useHistory()
  const location = useLocation()

  const redirectTo = (where, id) => () => {
    const redirectLocation = `/${where}/${id}`
    if(redirectLocation !== location.pathname) {
      history.push(redirectLocation)
    }
  }

  const remove = () => {
    removeTweet({
      variables: {id}
    })
}

  return (
    <Item>
      <Item.Image rounded style={{cursor: 'pointer'}} size='tiny' src={avatar || Harold} onClick={redirectTo('user', userId)} />
      <Item.Content>
        <Item.Header>
          <div style={{ display: 'flex', justifyContent: 'flex-end', padding: 2 }}>
            <h3>{tweet}</h3>
            <p style={{ fontSize: 13 }}>{time}</p>
          </div>
        </Item.Header>
        <Item.Description style={{cursor: 'pointer'}} onClick={redirectTo('user', userId)}>By {name}</Item.Description>
        <Item.Description >{createdAt}</Item.Description>
        <Item.Extra>
          {withModal && (
            <>
            <LikeButton id={id} likes={likes}/>
            <TweetModal
            createdAt={createdAt}
              id={id}
              tweet={tweet}
              avatar={avatar}
              name={name}
              time={time}
              userId={userId}
              showCommentsAlways={showCommentsAlways}
            />
            <Button as='div' labelPosition='right'>
              <Button onClick={redirectTo('tweet', id)} basic color='blue'>
                <Icon name='expand arrows alternate' />
                Szczegóły
              </Button>
            </Button>
            <Button as='div' labelPosition='right'>
              <Button onClick={remove} basic color='red'>
                <Icon name='window close' />
                Usuń tweet
              </Button>
            </Button>
            </>
          )}
          {(showCommentsAlways) && <CommentSection tweetId={id}/>}
        </Item.Extra>
      </Item.Content>
    </Item>
  )
}

export default Tweet