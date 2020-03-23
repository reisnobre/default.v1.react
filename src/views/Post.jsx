import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouteMatch } from 'react-router-dom'

export default function About () {
  const match = useRouteMatch()
  const [post, setPost] = useState([])

  const fetchPost = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`)
    setPost(response.data)
  }

  useEffect(() => {
    fetchPost()
    // eslint-disable-next-line
  }, [])

  return (
    <div className='post'>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}
