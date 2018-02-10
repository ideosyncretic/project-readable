import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import Header from './Header'
import Posts from './Posts'
import PostDetail from './PostDetail'

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
