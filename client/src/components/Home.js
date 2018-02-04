import React from "react"
import { Route } from "react-router-dom"
import Categories from "./Categories"
import Posts from "./Posts"

const Home = () => {
	return (
		<main>
			<h2>Categories</h2>
			<Categories />
			<h2>Posts</h2>
			<Route path="/:category?" component={Posts} />
		</main>
	)
}

export default Home
