import React from "react"
import { Comment as SemanticComment } from "semantic-ui-react"

import Avatar1 from "../assets/Avatar.jpg"


const Comment = ({ author, content, commentTime, avatar }) => {
  return (
    <SemanticComment>
      <SemanticComment.Avatar src={avatar || Avatar1} />
      <SemanticComment.Content>
        <SemanticComment.Author as="a">{author}</SemanticComment.Author>
        <SemanticComment.Metadata>
          <div>{commentTime}</div>
        </SemanticComment.Metadata>
        <SemanticComment.Text>{content}</SemanticComment.Text>
      </SemanticComment.Content>
    </SemanticComment>
  )
}

export default Comment
