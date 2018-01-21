import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { getPostsRequest } from "./actions"

class App extends Component {
	componentDidMount() {
		this.props.getPostsRequest()
	}

	render() {
		const { posts } = this.props
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Readable</h1>
				</header>
				<p className="App-intro">
					{posts.map(post => <li key={post.id}>{post.title}</li>)}
				</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
