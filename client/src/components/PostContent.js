import React from 'react'
import TimeAgo from 'react-timeago'
import { Flex, Box } from 'rebass'

const PostContent = ({ post }) => {
  const { title, author, timestamp, body, category, voteScore } = post
  return (
    <Flex direction="column">
      <h2>{title}</h2>
      <Flex>
        {author}
        <Box>{<TimeAgo date={timestamp} />}</Box>
        <Box pl={2}>{category}</Box>
      </Flex>
      <p>{body}</p>
      <p>{voteScore} votes</p>
    </Flex>
  )
}
export default PostContent
