import React from 'react'
import TimeAgo from 'react-timeago'
import { Flex, Box, Badge } from 'rebass'

const CommentContent = ({ comment }) => {
  const { author, timestamp, body, voteScore } = comment
  return (
    <Flex direction="column">
      <p>{body}</p>
      <Flex pb={2}>
        <Box pr={2}>{author}</Box>
        <TimeAgo date={timestamp} />
      </Flex>
      <Flex>
        <Box>{voteScore} votes</Box>{' '}
      </Flex>
    </Flex>
  )
}
export default CommentContent