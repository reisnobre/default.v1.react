import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Posts () {
  const [posts, setPosts] = useState([])

  const fetchPosts = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setPosts(response.data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <main className='page' id='about'>
      {posts.map(post => (
        <Link key={post.id} to={`/post/${post.id}`}>
          <div className='post'>
            <h3>{post.title}</h3>
          </div>
        </Link>
      ))}
    </main>
  )
}
