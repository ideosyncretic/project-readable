import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Categories from './Categories'
import Posts from './Posts'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Readable</h1>
      </header>
      <main>
        <Switch>
          <Route path="/:category?" component={Posts} />
        </Switch>
      </main>
    </div>
  )
}

export default App
