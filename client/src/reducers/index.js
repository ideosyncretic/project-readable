import { combineReducers } from 'redux'
import {
  GET_POSTS,
  GET_POST,
  GET_CATEGORIES,
  ADD_POST,
  EDIT_POST,
  VOTE_POST,
  DELETE_POST,
  GET_COMMENTS,
  ADD_COMMENT,
  GET_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  VOTE_COMMENT
} from '../actions/types'
import { reducer as formReducer } from 'redux-form'
import _ from 'lodash'

const postsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_POSTS:
      const { posts } = action
      // convert array to object with id as key
      let postsObj = {}
      posts.map(post => {
        return (postsObj[post.id] = post)
      })
      return postsObj
    case VOTE_POST:
      const { votedPost } = action
      return {
        ...state,
        [votedPost.id]: {
          ...state[votedPost.id],
          voteScore: votedPost.voteScore
        }
      }
    default:
      return state
  }
}

const postReducer = (
  state = {
    id: '',
    title: '',
    timestamp: '',
    body: '',
    author: '',
    category: '',
    voteScore: 0,
    commentCount: 0,
    deleted: false
  },
  action
) => {
  switch (action.type) {
    case GET_POST:
      const { post } = action
      return post
    case ADD_POST:
      const { newPost } = action
      return newPost
    case EDIT_POST:
      const { editedPost } = action
      return editedPost
    case VOTE_POST:
      const { votedPost } = action
      return votedPost
    case DELETE_POST:
      const { deletedPost } = action
      return deletedPost
    default:
      return state
  }
}

const categoriesReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      const { categories } = action
      let categoriesObj = {}
      categories.map(category => {
        return (categoriesObj[category.path] = category)
      })
      return categoriesObj
    default:
      return state
  }
}

const commentsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      const { comments } = action
      let commentsObj = {}
      comments.map(comment => {
        return (commentsObj[comment.id] = comment)
      })
      return commentsObj
    case ADD_COMMENT:
      const { newComment } = action
      return {
        ...state,
        [newComment.id]: newComment
      }
    case EDIT_COMMENT:
      const { editedComment } = action
      return {
        ...state,
        [editedComment.id]: editedComment
      }
    case DELETE_COMMENT:
      const { deletedComment } = action
      return _.omit(state, deletedComment.id)
    case VOTE_COMMENT:
      const { votedComment } = action
      return {
        ...state,
        [votedComment.id]: votedComment
      }
    default:
      return state
  }
}

const commentReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_COMMENT:
      const { comment } = action
      return comment
    default:
      return state
  }
}

const rootReducer = combineReducers({
  posts: postsReducer,
  post: postReducer,
  comments: commentsReducer,
  comment: commentReducer,
  categories: categoriesReducer,
  form: formReducer
})

export default rootReducer
