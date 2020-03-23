import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <header id='r-header'>
      <nav>
        <ul>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/posts'>
            <li>Posts</li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}
