import { GET_POSTS } from "./types"

export const getPosts = posts => ({
	type: GET_POSTS,
	posts
})
