import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Posts from './Posts'
import PostDetail from './PostDetail'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Readable</h1>
      </header>
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
