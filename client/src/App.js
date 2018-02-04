import React, { Component } from "react"
import "./App.css"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { getPostsRequest, getCategoriesRequest } from "./actions"

class App extends Component {
	componentDidMount() {
		this.props.getPostsRequest()
		this.props.getCategoriesRequest()
	}

	render() {
		const { posts, categories } = this.props
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Readable</h1>
				</header>
				<h2>Categories</h2>
				{categories.map(category => (
					<li key={category.name}>{category.name}</li>
				))}
				<h2>Posts</h2>
				{posts.map(post => <li key={post.id}>{post.title}</li>)}
			</div>
		)
	}
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
