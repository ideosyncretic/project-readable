import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPostRequest } from '../actions'
import Post from './Post'

class PostDetail extends Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getPostRequest(id)
  }
  render() {
    const { post } = this.props
    return <Post post={post} />
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
