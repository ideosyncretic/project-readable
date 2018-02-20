import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'rebass'
import PostContent from './PostContent.js'
import { MIDNIGHT_5 } from '../../../styles/colors.js'

export const PostCard = props => {
  const { post, handleVote } = props
  const { id, deleted } = post

  return post ? (
    !deleted ? (
      <StyledPostCard>
        <Link to={`/${post.category}/${id}`}>
          <PostContent post={post} handleVote={handleVote} />
        </Link>
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
    color: inherit;
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px 0 ${MIDNIGHT_5};
  }
`

export default PostCard
