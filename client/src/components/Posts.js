import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { getPostsRequest } from "../actions"

class Posts extends Component {
	componentDidMount() {
		this.props.getPostsRequest()
	}

	render() {
		const { posts, match } = this.props
		return <PostList posts={posts} path={match.params.category} />
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

const PostList = ({ posts, path }) => {
	return (
		<div className="Posts">
			{path &&
				posts
					.filter(post => post.category === path)
					.map(post => <li key={post.id}>{post.title}</li>)}
			{!path && posts.map(post => <li key={post.id}>{post.title}</li>)}
		</div>
	)
}
