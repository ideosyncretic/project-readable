import { combineReducers } from "redux"
import { GET_POSTS } from "../actions/types"

const postsReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_POSTS:
			const { posts } = action
			let postsObj = {}
			posts.map(post => {
				return (postsObj[post.id] = post)
			})
			return postsObj
		default:
			return state
	}
}

const rootReducer = combineReducers({
	posts: postsReducer
})

export default rootReducer
