import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Card } from 'rebass'
import TimeAgo from 'react-timeago'
import { Flex, Box } from 'rebass'

const PostCard = styled(Card)`
  padding: 1em;
  text-align: left;
`

export const Post = ({ post }) => {
  const { title, body, timestamp, author, category, voteScore, deleted } = post
  return !deleted ? (
    <PostCard>
      <h3>{title}</h3>
      <Flex>
        <Box>{author}</Box>
        <Box pl={2}>{<TimeAgo date={timestamp} />}</Box>
        <Box pl={2}>{category}</Box>
      </Flex>

      <p>{body}</p>
      <p>{voteScore} votes</p>
    </PostCard>
  ) : (
    <PostCard>Sorry, this post has been deleted.</PostCard>
  )
}

export default Post
