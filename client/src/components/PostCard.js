import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { Card } from 'rebass'
import PostContent from './PostContent.js'
import {
  PRIMARY,
  BACKGROUND_MEDIUM,
  BACKGROUND_LIGHT,
  TEXT_LIGHT_MUTED
} from '../styles/constants'

export const PostCard = props => {
  const { post } = props
  const { id, deleted } = post

  let redirect = () => {
    props.history.push(`/post/${id}`)
  }

  return post ? (
    !deleted ? (
      <StyledPostCard onClick={redirect}>
        <PostContent post={post} />
      </StyledPostCard>
    ) : (
      <StyledPostCard>Sorry, this post has been deleted.</StyledPostCard>
    )
  ) : null
}

const StyledPostCard = Card.extend`
  background: ${BACKGROUND_MEDIUM};
  color: ${TEXT_LIGHT_MUTED};
  box-shadow: none;
  padding: 2rem;
  margin-bottom: 1rem;
  text-align: left;
  a {
    text-decoration: none;
    &:visited {
      color: inherit;
    }
  }
  &:hover {
    cursor: pointer;
    background: ${BACKGROUND_LIGHT};
  }
`

export default withRouter(PostCard)
