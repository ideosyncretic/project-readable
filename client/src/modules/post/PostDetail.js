import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  getPostRequest,
  getCommentsRequest,
  votePostRequest
} from '../../actions/index.js'
import PostContent from './components/PostContent.js'
import CommentCard from '../comment/components/CommentCard.js'
import { Box } from 'rebass'
import { WHITE } from '../../styles/colors'

class PostDetail extends Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getPostRequest(id)
    this.props.getCommentsRequest(id)
  }

  handleVote = (id, voteOption) => {
    this.props.votePostRequest(id, voteOption)
  }

  render() {
    const { post, comments } = this.props
    return (
      <Box p={3} bg={WHITE}>
        <PostContent post={post} handleVote={this.handleVote} isDetail />
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

export default connect(mapStateToProps, {
  getPostRequest,
  getCommentsRequest,
  votePostRequest
})(PostDetail)
