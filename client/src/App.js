import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header.js'
import Posts from './modules/posts/Posts.js'
import PostDetail from './modules/post/PostDetail.js'
import AddPost from './modules/post/AddPost.js'
import EditPost from './modules/post/EditPost.js'
import EditComment from './modules/comment/EditComment.js'
import { ToastContainer, toast } from 'react-toastify'

const App = () => {
  const notify = message => {
    toast.info(message, {
      position: toast.POSITION.BOTTOM_CENTER,
      className: 'toast'
    })
  }
  return (
    <div className="App">
      <Header />
      <main>
        <ToastContainer />
        <Switch>
          <Route
            exact
            path="/post/add"
            render={props => <AddPost {...props} notify={notify} />}
          />
          <Route
            exact
            path="/:category/:postID"
            render={props => <PostDetail {...props} notify={notify} />}
          />
          <Route exact path="/comment/edit/:id" component={EditComment} />
          <Route
            exact
            path="/:category/edit/:id"
            render={props => <EditPost {...props} notify={notify} />}
          />
          <Route
            exact
            path="/:category?"
            render={props => <Posts {...props} notify={notify} />}
          />
        </Switch>
      </main>
    </div>
  )
}

export default App
