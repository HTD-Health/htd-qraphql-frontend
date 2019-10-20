import React, { useState } from 'react'
import { HomeContainer, HomePanel, TweetTextarea } from './style'
import { Form, Button, Item } from 'semantic-ui-react'
import Spinner from '../../components/Spinner'

import Tweet from '../../components/Tweet'

// const itemsPerPage = 5

function Home({addTweet, tweets, tweetsLoading, removeTweet, fetchMore}) {
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const [tweet, setTweet] = useState("")
  const [author, setAuthor] = useState("")

  const changeInputValue = changeFn => e => {
    e.preventDefault()
    changeFn(e.target.value)
  }

  const paginate = () =>  {
    setPage(page + 1)
    setLoading(true)
    }


  const uploadTweet = e => {
    if (author.length === 0 || tweet.length === 0) return
    if (e) e.preventDefault()
    addTweet({
      variables: {
        text: tweet,
        username: author
      }
    })

    setTweet('')
    setAuthor('')
  }

  const enterListener = e => {
    if (e.keyCode === 13) uploadTweet()
  }

  const renderTweet = ({ id, text, likes, user, createdAt}) => {
    return <Tweet createdAt={createdAt} withModal key={id} removeTweet={removeTweet} id={id} userId={user? user.id : '3'} likes={likes} tweet={text} avatar={user && user.avatar} name={user? user.username : 'null'} ></Tweet>
  }

  return (
    <HomeContainer>
      <HomePanel>
        <Form style={{marginTop: 40}}>
          <TweetTextarea
            rows="1"
            onKeyDown={enterListener}
            value={author}
            onChange={changeInputValue(setAuthor)}
            placeholder="Autor"
          />
          <TweetTextarea
            onKeyDown={enterListener}
            value={tweet}
            onChange={changeInputValue(setTweet)}
            placeholder="Tłitnij coś"
          />
          <Button floated="right" onClick={uploadTweet} primary compact>
            Tweet
          </Button>
        </Form>
        <Item.Group divided>
          {tweetsLoading && <Spinner />}
          {tweets && tweets.getTweets && tweets.getTweets.map(renderTweet)}
        </Item.Group>
      </HomePanel>
    </HomeContainer>
  )
}

export default Home
