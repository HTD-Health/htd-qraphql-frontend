import React from "react"
import { Header, Button, Modal, Icon } from "semantic-ui-react"
import CommentSection from "../containers/commentSection"
import Tweet from './Tweet'

const COMMENT = "Skomentuj"

const TweetModal = ({id, createdAt, tweet, avatar, name, time, userId, showCommentsAlways, withModal}) => {
  return (
    <Modal trigger={
      <Button as='div' labelPosition='right'>
        <Button basic color='blue'>
          <Icon name='comment' />
          {COMMENT}
        </Button>
      </Button>
    } centered={false}>
      <Modal.Content image>
        <Modal.Description>
          <Header>{name}</Header>
          <Tweet
            createdAt={createdAt}
            tweet={tweet} 
            avatar={avatar} 
            name={name} 
            id={id}
            userId={userId}
            showCommentsAlways={showCommentsAlways}
            withModal={withModal}
            time={time}              
          />
          <CommentSection tweetId={id}/>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}

export default TweetModal