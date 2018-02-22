import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  getPostRequest,
  deletePostRequest,
  getCommentsRequest,
  votePostRequest,
  voteCommentRequest
} from '../../actions/index.js'
import PostContent from './components/PostContent.js'
import CommentCard from '../comment/components/CommentCard.js'
import AddComment from '../comment/AddComment.js'
import { Box } from 'rebass'
import { WHITE } from '../../styles/colors'

class PostDetail extends Component {
  state = {
    isDeleted: false,
    isLoading: true
  }

  componentDidMount() {
    const id = this.props.match.params.postID
    this.props.getPostRequest(id)
    this.props.getCommentsRequest(id)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.post.hasLoaded) {
      this.setState(() => ({ isLoading: false }))
      if (!nextProps.post.id) {
        this.setState(() => ({ isLoading: false, isDeleted: true }))
      }
    }
  }

  handlePostVote = (id, voteOption) => {
    this.props.votePostRequest(id, voteOption)
  }

  handleCommentVote = (id, voteOption) => {
    this.props.voteCommentRequest(id, voteOption)
  }

  handleDelete = id => {
    this.props
      .deletePostRequest(id)
      .then(this.props.notify('Post deleted!'))
      .then(this.props.history.push('/'))
  }

  compareRecency = (a, b) => b.timestamp - a.timestamp

  render() {
    const { isDeleted } = this.state
    const { post, comments, notify } = this.props
    const sortedComments = [].concat(comments.sort(this.compareRecency))
    return isDeleted ? (
      <Box>
        <Box p={3} bg={WHITE}>
          <h3>This post has been deleted!</h3>
        </Box>
      </Box>
    ) : (
      <Box>
        <Box p={3} bg={WHITE}>
          <PostContent
            post={post}
            handleVote={this.handlePostVote}
            handleDelete={this.handleDelete}
            isDetail
          />
        </Box>
        <Box mt={2}>
          <AddComment parentId={post.id} notify={notify} />
          {sortedComments.map(comment => (
            <CommentCard
              key={comment.id}
              comment={comment}
              handleVote={this.handleCommentVote}
            />
          ))}
        </Box>
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
  deletePostRequest,
  getCommentsRequest,
  votePostRequest,
  voteCommentRequest
})(PostDetail)
