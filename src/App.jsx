import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import RHeader from './components/RNavigation'
import Home from './views/Home'
import Posts from './views/Posts'
import Post from './views/Post'

import 'react-bulma-components/dist/react-bulma-components.min.css'
import './scss/main.scss'

export default () => {
  return (
    <div id='app'>
      <Router>
        <RHeader />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/posts' exact component={Posts} />
          <Route path='/post/:id' component={Post} />
        </Switch>
      </Router>
    </div>
  )
}
