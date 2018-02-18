import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Card } from 'rebass'
import { Box } from 'rebass'
import PostContent from './PostContent.js'

const StyledPostDetailCard = styled(Card)`
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

export const PostDetailCard = ({ post }) => {
  const { id, deleted } = post
  return post ? (
    !deleted ? (
      <StyledPostDetailCard>
        <Link to={`/post/${id}`}>
          <Box>
            <Link to={`/post/edit/${id}`}>Edit</Link>
          </Box>
          <PostContent post={post} />
        </Link>
      </StyledPostDetailCard>
    ) : (
      <StyledPostDetailCard>
        Sorry, this post has been deleted.
      </StyledPostDetailCard>
    )
  ) : null
}

export default PostDetailCard
