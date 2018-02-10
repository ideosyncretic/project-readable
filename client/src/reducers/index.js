import { combineReducers } from 'redux'
import { GET_POSTS, GET_POST, GET_CATEGORIES } from '../actions/types'

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
    default:
      return state
  }
}

const postReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_POST:
      const { post } = action
      return post
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

const rootReducer = combineReducers({
  posts: postsReducer,
  post: postReducer,
  categories: categoriesReducer
})

export default rootReducer
