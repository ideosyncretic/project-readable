import {
  GET_POSTS,
  GET_CATEGORIES,
  GET_POST,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  GET_COMMENTS,
  VOTE_POST,
  ADD_COMMENT
} from './types'
import { generateID } from '../utils/uuidGenerator.js'
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

// get post

export const getPostRequest = id => dispatch => {
  return api.get(`/posts/${id}`).then(res => dispatch(getPostSuccess(res.data)))
}

const getPostSuccess = post => ({
  type: GET_POST,
  post
})

// add post

export const addPostRequest = params => dispatch => {
  return api
    .post(`/posts/`, {
      id: generateID(),
      title: params.title,
      body: params.body,
      author: params.author,
      category: params.category,
      timestamp: Date.now()
    })
    .then(res => dispatch(addPostSuccess(res.data)))
}

const addPostSuccess = post => ({
  type: ADD_POST,
  newPost: post
})

// edit post

export const editPostRequest = params => dispatch => {
  return api
    .put(`/posts/${params.id}`, {
      title: params.title,
      body: params.body
    })
    .then(res => dispatch(editPostSuccess(res.data)))
}

const editPostSuccess = post => ({
  type: EDIT_POST,
  editedPost: post
})

// delete post

export const deletePostRequest = id => dispatch => {
  return api
    .delete(`/posts/${id}`)
    .then(res => dispatch(deletePostSuccess(res.data)))
}

const deletePostSuccess = post => ({
  type: DELETE_POST,
  deletedPost: post
})

// vote on post

export const votePostRequest = (id, voteOption) => dispatch => {
  return api
    .post(`/posts/${id}`, {
      option: voteOption
    })
    .then(res => dispatch(votePostSuccess(res.data)))
}

export const votePostSuccess = post => ({
  type: VOTE_POST,
  votedPost: post
})

// get post comments

export const getCommentsRequest = id => dispatch => {
  api
    .get(`/posts/${id}/comments`)
    .then(res => dispatch(getCommentsSuccess(res.data)))
}

export const getCommentsSuccess = comments => ({
  type: GET_COMMENTS,
  comments
})

// add comment

export const addCommentRequest = (params, parentId) => dispatch => {
  api
    .post(`/comments`, {
      id: generateID(),
      parentId: parentId,
      timestamp: Date.now(),
      body: params.body,
      author: params.author
    })
    .then(res => dispatch(addCommentSuccess(res.data)))
}

export const addCommentSuccess = comment => ({
  type: ADD_COMMENT,
  newComment: comment
})
