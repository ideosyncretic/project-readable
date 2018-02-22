import * as types from './types'
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
  type: types.GET_POSTS,
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
  type: types.GET_CATEGORIES,
  categories
})

// get post

export const getPostRequest = id => dispatch => {
  dispatch({
    type: types.POST_LOADING
  })
  return api.get(`/posts/${id}`).then(res => {
    dispatch(getPostSuccess(res.data))
    dispatch({
      type: types.POST_LOADED
    })
  })
}

const getPostSuccess = post => ({
  type: types.GET_POST,
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

const addPostSuccess = newPost => ({
  type: types.ADD_POST,
  newPost
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

const editPostSuccess = editedPost => ({
  type: types.EDIT_POST,
  editedPost
})

// delete post

export const deletePostRequest = id => dispatch => {
  return api
    .delete(`/posts/${id}`)
    .then(res => dispatch(deletePostSuccess(res.data)))
}

const deletePostSuccess = deletedPost => ({
  type: types.DELETE_POST,
  deletedPost
})

// vote on post

export const votePostRequest = (id, voteOption) => dispatch => {
  return api
    .post(`/posts/${id}`, {
      option: voteOption
    })
    .then(res => dispatch(votePostSuccess(res.data)))
}

export const votePostSuccess = votedPost => ({
  type: types.VOTE_POST,
  votedPost
})

// get post comments

export const getCommentsRequest = id => dispatch => {
  return api
    .get(`/posts/${id}/comments`)
    .then(res => dispatch(getCommentsSuccess(res.data)))
}

export const getCommentsSuccess = comments => ({
  type: types.GET_COMMENTS,
  comments
})

// add comment

export const addCommentRequest = (params, parentId) => dispatch => {
  return api
    .post(`/comments`, {
      id: generateID(),
      parentId: parentId,
      timestamp: Date.now(),
      body: params.body,
      author: params.author
    })
    .then(res => dispatch(addCommentSuccess(res.data)))
}

export const addCommentSuccess = newComment => ({
  type: types.ADD_COMMENT,
  newComment
})

// get comment

export const getCommentRequest = id => dispatch => {
  return api
    .get(`/comments/${id}`)
    .then(res => dispatch(getCommentSuccess(res.data)))
}

export const getCommentSuccess = comment => ({
  type: types.GET_COMMENT,
  comment
})

// edit comment

export const editCommentRequest = params => dispatch => {
  return api
    .put(`/comments/${params.id}`, {
      timestamp: Date.now(),
      body: params.body
    })
    .then(res => dispatch(editCommentSuccess(res.data)))
}

export const editCommentSuccess = editedComment => ({
  type: types.EDIT_COMMENT,
  editedComment
})

// delete comment

export const deleteCommentRequest = id => dispatch => {
  return api
    .delete(`/comments/${id}`)
    .then(res => dispatch(deleteCommentSuccess(res.data)))
}

export const deleteCommentSuccess = deletedComment => ({
  type: types.DELETE_COMMENT,
  deletedComment
})

// vote comment

export const voteCommentRequest = (id, voteOption) => dispatch => {
  return api
    .post(`/comments/${id}`, {
      option: voteOption
    })
    .then(res => dispatch(voteCommentSuccess(res.data)))
}

export const voteCommentSuccess = votedComment => ({
  type: types.VOTE_COMMENT,
  votedComment
})
