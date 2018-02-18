import React from 'react'
import styled from 'styled-components'
import { Card } from 'rebass'
import CommentContent from './CommentContent.js'

const StyledCommentCard = styled(Card)`
  padding: 16px;
  margin: 8px;
  text-align: left;
  a {
    text-decoration: none;
    &:visited {
      color: inherit;
    }
  }
`

export const CommentCard = ({ comment }) => {
  const { deleted } = comment
  return comment ? (
    !deleted ? (
      <StyledCommentCard>
        <CommentContent comment={comment} />
      </StyledCommentCard>
    ) : (
      <StyledCommentCard>Sorry, this post has been deleted.</StyledCommentCard>
    )
  ) : null
}

export default CommentCard
