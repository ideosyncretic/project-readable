import React from 'react'
import TimeAgo from 'react-timeago'
import { Flex, Box } from 'rebass'

const CommentContent = ({ comment }) => {
  const { author, timestamp, body, voteScore } = comment
  return (
    <Flex direction="column">
      <Flex pb={2}>
        <Box pr={2}>{author}</Box>
        <TimeAgo date={timestamp} />
      </Flex>
      <p>{body}</p>
      <Flex>
        <Box>{voteScore} votes</Box>{' '}
      </Flex>
    </Flex>
  )
}
export default CommentContent
