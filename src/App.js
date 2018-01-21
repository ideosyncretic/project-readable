import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { getPosts } from "./actions"

class App extends Component {
	componentDidMount() {
		this.props.getPosts([
			{
				id: "8xf0y6ziyjabvozdd253nd",
				timestamp: 1467166872634,
				title: "Udacity is the best place to learn React",
				body: "Everyone says so after all.",
				author: "thingtwo",
				category: "react",
				voteScore: 6,
				deleted: false,
				commentCount: 2
			},
			{
				id: "6ni6ok3ym7mf1p33lnez",
				timestamp: 1468479767190,
				title: "Learn Redux in 10 minutes!",
				body:
					"Just kidding. It takes more than 10 minutes to learn technology.",
				author: "thingone",
				category: "redux",
				voteScore: -5,
				deleted: false,
				commentCount: 0
			}
		])
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
	return bindActionCreators({ getPosts }, dispatch)
}

const mapStateToProps = ({ posts }) => {
	// convert object back to array
	const postsArr = Object.keys(posts).map(key => posts[key])
	return {
		posts: postsArr
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
