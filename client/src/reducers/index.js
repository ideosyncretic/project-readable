import { combineReducers } from 'redux'
import * as types from '../actions/types'
import { reducer as formReducer } from 'redux-form'
import _ from 'lodash'

const postsReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_POSTS:
      const { posts } = action
      // convert array to object with id as key
      let postsObj = {}
      posts.map(post => {
        return (postsObj[post.id] = post)
      })
      return postsObj
    case types.VOTE_POST:
      const { votedPost } = action
      return {
        ...state,
        [votedPost.id]: {
          ...state[votedPost.id],
          voteScore: votedPost.voteScore
        }
      }
    case types.DELETE_POST:
      const { deletedPost } = action
      return _.omit(state, deletedPost.id)
    default:
      return state
  }
}

// const initialState = {
//   id: '',
//   title: '',
//   timestamp: '',
//   body: '',
//   author: '',
//   category: '',
//   voteScore: 0,
//   commentCount: 0,
//   deleted: false
// }

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
    deleted: false,
    hasLoaded: false
  },
  action
) => {
  switch (action.type) {
    case types.GET_POST:
      const { post } = action
      return post
    case types.ADD_POST:
      const { newPost } = action
      return newPost
    case types.EDIT_POST:
      const { editedPost } = action
      return editedPost
    case types.VOTE_POST:
      const { votedPost } = action
      return votedPost
    case types.DELETE_POST:
      const { deletedPost } = action
      return deletedPost
    case types.ADD_COMMENT:
      return {
        ...state,
        commentCount: state.commentCount + 1
      }
    case types.DELETE_COMMENT:
      return {
        ...state,
        commentCount: state.commentCount - 1
      }
    case types.POST_LOADING:
      return {
        ...state,
        hasLoaded: false
      }
    case types.POST_LOADED:
      return {
        ...state,
        hasLoaded: true
      }
    default:
      return state
  }
}

const categoriesReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_CATEGORIES:
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
    case types.GET_COMMENTS:
      const { comments } = action
      let commentsObj = {}
      comments.map(comment => {
        return (commentsObj[comment.id] = comment)
      })
      return commentsObj
    case types.ADD_COMMENT:
      const { newComment } = action
      return {
        ...state,
        [newComment.id]: newComment
      }
    case types.EDIT_COMMENT:
      const { editedComment } = action
      return {
        ...state,
        [editedComment.id]: editedComment
      }
    case types.DELETE_COMMENT:
      const { deletedComment } = action
      return _.omit(state, deletedComment.id)
    case types.VOTE_COMMENT:
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
    case types.GET_COMMENT:
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
