import React, {useState} from 'react'
import { Button, Icon, Label } from "semantic-ui-react"

function LikeButton({likes, likeTweet}){
  const [liked, setLiked] = useState(false)
  const like = () => {
    if(!liked) {
      likeTweet()
      setLiked(true)
    }
  }
  return <Button onClick={like} as='div' labelPosition='right'>
  <Button color={liked ? 'grey' :'red'}>
    <Icon name='heart' />
      Lubię to!
  </Button>
  <Label as='a' basic color='red' pointing='left'>
    {likes}
  </Label>
</Button>
}
export default LikeButton