import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bulma-components/lib/components/navbar/navbar'

export default function Header () {
  return (
    <header>
      <Navbar>
        <Navbar.Brand>
          <Navbar.Item renderAs='a' href='#'>
            <img src='https://bulma.io/images/bulma-logo.png' alt='Bulma: a modern CSS framework based on Flexbox' width='112' height='28' />
          </Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Container>
            <Navbar.Item renderAs='span' arrowless href='#'>
              <Link to='/'>
                <span className='navbar-link is-arrowless'>
                  Home
                </span>
              </Link>
            </Navbar.Item>
            <Navbar.Item renderAs='span' href='#'>
              <Link to='/about'>
                <span className='navbar-link is-arrowless'>
                  About
                </span>
              </Link>
            </Navbar.Item>
            <Navbar.Item renderAs='span' arrowless href='#'>
              <Link to='/login'>
                <span className='navbar-link is-arrowless'>
                  Login
                </span>
              </Link>
            </Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    </header>
  )
}
