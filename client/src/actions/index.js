import { GET_POSTS } from "./types"
import axios from "axios"

const api = axios.create({
	baseURL: "http://localhost:3001",
	headers: {
		Authorization: "Basic kehrdne47cbed74khkr4"
	}
})

// this is a thunk
export const getPostsRequest = () => dispatch => {
	// return a promise
	return api.get("/posts").then(res => dispatch(getPostsSuccess(res.data)))
}

// export const getPostsRequest = function() {
//   return function(dispatch) {
//     return function() {
//       // do something
//     }
//   }
// }

const getPostsSuccess = posts => ({
	type: GET_POSTS,
	posts
})
