import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPostRequest, getCommentsRequest } from '../../actions/index.js'
import PostCard from './components/PostCard.js'
import CommentCard from '../comment/components/CommentCard.js'
import { Box } from 'rebass'

class PostDetail extends Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getPostRequest(id)
    this.props.getCommentsRequest(id)
  }
  render() {
    const { post, comments } = this.props
    return (
      <Box p={3}>
        <PostCard post={post} />
        {comments.map(comment => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </Box>
    )
  }
}
const mapStateToProps = ({ post, comments }) => {
  const commentsArr = Object.keys(comments).map(key => comments[key])
  return {
    post,
    comments: commentsArr
  }
}

export default connect(mapStateToProps, { getPostRequest, getCommentsRequest })(
  PostDetail
)
