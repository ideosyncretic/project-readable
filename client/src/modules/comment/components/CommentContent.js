import React from 'react'
import { Link } from 'react-router-dom'
import TimeAgo from 'react-timeago'
import { Flex, Box, Button } from 'rebass'
import Votes from '../../../components/Votes.js'

const CommentContent = ({ comment, handleVote }) => {
  const { id, author, timestamp, body, voteScore } = comment
  return (
    <Flex direction="column">
      <Flex pb={2} justify="space-between">
        <Flex>
          <Box mr={2}>{author}</Box>
          <Box>
            <TimeAgo date={timestamp} />
          </Box>
        </Flex>
        <Box>
          <Link to={`/comment/edit/${id}`}>
            <Button children="Edit" />
          </Link>
        </Box>
      </Flex>
      <p>{body}</p>
      <Flex>
        <Votes voteScore={voteScore} handleVote={handleVote} id={id} />
      </Flex>
    </Flex>
  )
}
export default CommentContent
