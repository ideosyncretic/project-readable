import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Card, Box } from 'rebass'
import PostContent from './PostContent.js'
import { MIDNIGHT_5 } from '../../../styles/colors.js'

export const PostCard = props => {
  const { post, handleVote } = props
  const path = props.match.params.id
  console.log(path)
  const { id, deleted } = post

  let redirect = () => {
    props.history.push(`/post/${id}`)
  }

  return post ? (
    !deleted ? (
      <StyledPostCard path={path} onClick={path ? null : redirect}>
        {path ? (
          <Box>
            <Link to={`/post/edit/${id}`}>Edit</Link>
          </Box>
        ) : null}
        <PostContent post={post} handleVote={handleVote} />
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
    &:visited {
      color: inherit;
    }
  }
  &:hover {
    cursor: ${({ path }) => (path ? 'default' : 'pointer')};
    box-shadow: 0 0 10px 0 ${MIDNIGHT_5};
  }
`

export default withRouter(PostCard)
