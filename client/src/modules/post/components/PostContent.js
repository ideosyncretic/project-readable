import React from 'react'
import { Link } from 'react-router-dom'
import TimeAgo from 'react-timeago'
import { Flex, Box, Badge } from 'rebass'
import Votes from './Votes'
import { ACCENT } from '../../../styles/colors.js'

const PostContent = ({ post, handleVote, isDetail }) => {
  const {
    id,
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
      {isDetail ? (
        <Box>
          <Link to={`/post/edit/${id}`}>Edit</Link>
        </Box>
      ) : null}
      <Box>
        <Badge bg={ACCENT}>{category}</Badge>
      </Box>
      <h2>{title}</h2>
      <Flex>
        <Box pr={2}>{author}</Box>
        <TimeAgo date={timestamp} />
      </Flex>
      <p>{body}</p>
      <Flex justify="space-between">
        <Votes voteScore={voteScore} handleVote={handleVote} id={id} />
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
