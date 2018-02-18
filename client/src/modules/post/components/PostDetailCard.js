import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Card } from 'rebass'
import { Box } from 'rebass'
import PostContent from '../../../components/PostContent.js'
import {
  BACKGROUND_LIGHT,
  BACKGROUND_MEDIUM,
  TEXT_LIGHT_MUTED
} from '../../../styles/constants'

export const PostDetailCard = ({ post }) => {
  const { id, deleted } = post
  return post ? (
    !deleted ? (
      <StyledPostDetailCard>
        <Box>
          <Link to={`/post/edit/${id}`}>Edit</Link>
        </Box>
        <PostContent post={post} />
      </StyledPostDetailCard>
    ) : (
      <StyledPostDetailCard>
        Sorry, this post has been deleted.
      </StyledPostDetailCard>
    )
  ) : null
}

const StyledPostDetailCard = Card.extend`
  box-shadow: none;
  padding: 2rem;
  margin-bottom: 1rem;
  text-align: left;
`
export default PostDetailCard
