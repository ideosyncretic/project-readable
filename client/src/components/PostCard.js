import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Card } from 'rebass'
import TimeAgo from 'react-timeago'
import { Flex, Box } from 'rebass'

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
  const {
    id,
    title,
    body,
    timestamp,
    author,
    category,
    voteScore,
    deleted
  } = post
  return post ? (
    !deleted ? (
      <StyledPostCard>
        <Link to={`/post/${id}`}>
          <Box>
            <h2>{title}</h2>
            <Flex>
              <Box>{author}</Box>
              <Box pl={2}>{<TimeAgo date={timestamp} />}</Box>
              <Box pl={2}>{category}</Box>
            </Flex>
            <p>{body}</p>
            <p>{voteScore} votes</p>
          </Box>
        </Link>
      </StyledPostCard>
    ) : (
      <StyledPostCard>Sorry, this post has been deleted.</StyledPostCard>
    )
  ) : null
}

export default PostCard
