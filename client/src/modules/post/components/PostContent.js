import React from 'react'
import { Link } from 'react-router-dom'
import TimeAgo from 'react-timeago'
import { Flex, Box, Badge, ButtonOutline } from 'rebass'
import Votes from '../../../components/Votes.js'
import { ACCENT } from '../../../styles/colors.js'

const PostContent = ({ post, handleVote, handleDelete }) => {
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
      <Flex justify="space-between">
        <Box>
          <Badge bg={ACCENT}>{category}</Badge>
        </Box>
        <Box>
          <Link to={`/${category}/edit/${id}`}>
            <ButtonOutline>Edit</ButtonOutline>
          </Link>
          <ButtonOutline onClick={() => handleDelete(id)}>Delete</ButtonOutline>
        </Box>
      </Flex>
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
