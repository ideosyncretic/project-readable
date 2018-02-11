import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header.js'
import Posts from './modules/posts/Posts.js'
import PostDetail from './modules/post/PostDetail.js'

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path="/post/:id" component={PostDetail} />
          <Route exact path="/:category?" component={Posts} />
        </Switch>
      </main>
    </div>
  )
}

export default App
