import React from 'react'
import TimeAgo from 'react-timeago'
import { Flex, Box, Badge } from 'rebass'

const PostContent = ({ post }) => {
  const {
    title,
    author,
    timestamp,
    body,
    category,
    voteScore,
    commentCount
  } = post
  return (
    <Flex direction="column">
      <Box>
        <Badge>{category}</Badge>
      </Box>
      <h2>{title}</h2>
      <Flex>
        <Box pr={2}>{author}</Box>
        <TimeAgo date={timestamp} />
      </Flex>
      <p>{body}</p>
      <Flex justify="space-between">
        <Box>{voteScore} votes</Box>{' '}
        <Box>
          {commentCount > 1 || commentCount === 0
            ? `${commentCount} comments`
            : `1 comment`}
        </Box>
      </Flex>
    </Flex>
  )
}
export default PostContent
