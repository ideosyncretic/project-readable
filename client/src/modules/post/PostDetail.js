import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPostRequest } from '../../actions/index.js'
import PostDetailCard from '../../components/PostDetailCard.js'
import { Box } from 'rebass'

class PostDetail extends Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getPostRequest(id)
  }
  render() {
    const { post } = this.props
    return (
      <Box p={3}>
        <PostDetailCard post={post} />
      </Box>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getPostRequest }, dispatch)
}

// const mapDispatchToProps = dispatch => {
//   return {
//     getPostRequest: id => dispatch(getPostRequest(id))
//   }
// }

const mapStateToProps = ({ post }) => {
  return {
    post
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
