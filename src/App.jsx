import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import 'react-bulma-components/dist/react-bulma-components.min.css'
import './scss/main.scss'

import Header from './components/Header'
import Home from './views/Home'
import About from './views/About'
import Login from './views/Login'

export default () => {
  return (
    <div id='app'>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/login' exact component={Login} />
        </Switch>
      </Router>
    </div>
  )
}
