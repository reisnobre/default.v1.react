import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default () => {
  // data goes here
  const [posts, setPosts] = useState([])

  // methods goes here
  const fetchPosts = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setPosts(response.data)
  }

  // life cycle methods goes here
  useEffect(() => {
    fetchPosts()
  })

  return (
    <main className='page' id='posts'>
      {posts.map(post => (
        <Link key='{post.id}' to={`/post/${post.id}`}>
          <div className='post'>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        </Link>
      ))}
    </main>
  )
}
