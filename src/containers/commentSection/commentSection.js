import React, { useState } from "react"
import { Input, Button, Comment as SemanticComment } from "semantic-ui-react"
import Comment from "../../components/Comment"
import Spinner from "../../components/Spinner"

const author = "Autor"
const addCommentText = "Dodaj komentarz"
const saveComment = 'Skomentuj'

function CommentSection({ comments, commentsLoading, addComment, newCommentLoading}) {
  const [comment, changeComment] = useState("")
  const [commentAuthor, changeCommentAuthor] = useState("")

  const changeInputValue = changeFn => e => {
    changeFn(e.target.value)
  }

  const uploadComment = () => {
    if (commentAuthor.length === 0 || comment.length === 0) return
    addComment({
      variables: {
        username: commentAuthor,
        commentText: comment
      }
    })
    changeComment("")
    changeCommentAuthor("")
  }

  const enterListener = e => {
    if (e.keyCode === 13) uploadComment()
  }

  const renderComments = ({ text, createdAt, user: { avatar, username} }, index) => (
    <Comment
      avatar={avatar}
      author={username}
      content={text}
      commentTime={createdAt}
      key={index}
    />
  )
  return (
    <SemanticComment.Group padded="true">
      {commentsLoading && <Spinner />}
      <div>{comments && comments.getTweet && comments.getTweet.comments.map(renderComments)}</div>
      <Input
        onKeyDown={enterListener}
        value={commentAuthor}
        onChange={changeInputValue(changeCommentAuthor)}
        placeholder={author}
      />
      <Input
        onKeyDown={enterListener}
        value={comment}
        onChange={changeInputValue(changeComment)}
        placeholder={addCommentText}
      />
      <Button disabled={newCommentLoading} onClick={uploadComment}>{saveComment}</Button>
    </SemanticComment.Group>
  )
}

export default CommentSection
