import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { Card } from 'rebass'
import PostContent from './PostContent.js'
import {
  ACCENT,
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
    box-shadow: 0 0 5px 2px ${TEXT_LIGHT_MUTED};
  }
`

export default withRouter(PostCard)
