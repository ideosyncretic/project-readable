import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPostsRequest, getCategoriesRequest } from '../../actions/index.js'
import PostCard from '../post/components/PostCard.js'
import CategoryFilter from './components/CategoryFilter.js'
import SortToggle from './components/SortToggle.js'
import styled from 'styled-components'
import { Flex, Box } from 'rebass'
import { WHITE } from '../../styles/colors.js'

class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sortBy: 'SORT_BY_LATEST'
    }
  }

  componentDidMount() {
    this.props.getPostsRequest()
    this.props.getCategoriesRequest()
  }

  handleSort = sortBy => {
    this.setState({ sortBy })
  }

  render() {
    const { categories, posts, match } = this.props
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
        <PostFilter direction="column" align="center" p={2}>
          <Box>
            <CategoryFilter categories={categories} />
          </Box>
          <SortToggle handleSort={this.handleSort} />
        </PostFilter>
        <PostsList posts={sortedPosts} />
      </div>
    )
  }
}

const PostsList = ({ posts }) => {
  return (
    <Box p={3}>
      {posts.map(post => {
        return <PostCard key={post.id} post={post} />
      })}
    </Box>
  )
}

const mapDispatchToProps = dispatch => {
  // bind action creators
  return bindActionCreators({ getPostsRequest, getCategoriesRequest }, dispatch)
}

const mapStateToProps = ({ posts, categories }) => {
  // convert object back to array
  const postsArr = Object.keys(posts).map(key => posts[key])
  const categoriesArr = Object.keys(categories).map(key => categories[key])
  return {
    posts: postsArr,
    categories: categoriesArr
  }
}

const PostFilter = styled(Flex)`
  background: ${WHITE};
`

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
