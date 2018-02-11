import { GET_POSTS, GET_CATEGORIES, GET_POST } from './types'
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    Authorization: 'Basic kehrdne47cbed74khkr4'
  }
})

// this is a thunk
export const getPostsRequest = () => dispatch => {
  // return a promise
  return api.get('/posts').then(res => dispatch(getPostsSuccess(res.data)))
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

// categories

export const getCategoriesRequest = () => dispatch => {
  // return a promise
  return api
    .get('/categories')
    .then(res => dispatch(getCategoriesSuccess(res.data.categories)))
}

const getCategoriesSuccess = categories => ({
  type: GET_CATEGORIES,
  categories
})

// post

export const getPostRequest = id => dispatch => {
  return api.get(`/posts/${id}`).then(res => dispatch(getPostSuccess(res.data)))
}

const getPostSuccess = post => ({
  type: GET_POST,
  post
})
