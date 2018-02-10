import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPostsRequest } from '../actions'
import Post from './Post'
import Categories from './Categories'

class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sortBy: 'SORT_BY_POPULARITY'
    }
  }

  componentDidMount() {
    this.props.getPostsRequest()
  }

  handleSort = sortBy => {
    this.setState({ sortBy })
  }

  render() {
    const { posts, match } = this.props
    const { sortBy } = this.state

    const compare = (a, b) => {
      if (sortBy === 'SORT_BY_POPULARITY') {
        return b.voteScore - a.voteScore
      }
      if (sortBy === 'SORT_BY_LATEST') {
        return b.timestamp - a.timestamp
      }
    }

    const filteredPosts = match.params.category
      ? posts.filter(post => {
          return post.category === match.params.category
        })
      : posts
    const sortedPosts = [].concat(filteredPosts.sort(compare))

    return (
      <div>
        <h2>Categories</h2>
        <Categories />
        <h2>Posts</h2>
        <button onClick={() => this.handleSort('SORT_BY_POPULARITY')}>
          Popular
        </button>
        <button onClick={() => this.handleSort('SORT_BY_LATEST')}>
          Latest
        </button>
        {sortedPosts.map(post => {
          return <Post post={post} />
        })}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  // bind action creators
  return bindActionCreators({ getPostsRequest }, dispatch)
}

const mapStateToProps = ({ posts }) => {
  // convert object back to array
  const postsArr = Object.keys(posts).map(key => posts[key])
  return {
    posts: postsArr
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
