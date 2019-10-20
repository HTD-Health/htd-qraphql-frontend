import styled from "styled-components"
import { TextArea } from "semantic-ui-react"

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const HomePanel = styled.div`
  width: 100%;
  height: 100%;
`

export const TweetTextarea = styled(TextArea)`
  resize: none !important;
  margin-bottom: 10px !important;
`
