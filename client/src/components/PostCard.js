import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Card } from 'rebass'
import { Box } from 'rebass'
import PostContent from './PostContent.js'

const StyledPostCard = styled(Card)`
  padding: 2rem;
  margin-bottom: 1rem;
  text-align: left;
  a {
    text-decoration: none;
    &:visited {
      color: inherit;
    }
  }
`

export const PostCard = ({ post }) => {
  const { id, deleted } = post
  return post ? (
    !deleted ? (
      <StyledPostCard>
        <Link to={`/post/${id}`}>
          <PostContent post={post} />
        </Link>
      </StyledPostCard>
    ) : (
      <StyledPostCard>Sorry, this post has been deleted.</StyledPostCard>
    )
  ) : null
}

export default PostCard
