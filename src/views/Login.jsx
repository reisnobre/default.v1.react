import React, { useEffect } from 'react'
import api from '../utils/api'
import { useDispatch } from 'react-redux'
import { setAuthenticationToken } from '../actions/authenticationActions'

const axios = api({ secure: false })

export default function Login () {
  // const [user, setUser] = useState([])
  const dispatch = useDispatch()

  const credentails = {
    username: 'admin@admin.com',
    password: 'nit_admin'
  }

  const data = Object.assign(credentails, { client_id: '2', client_secret: 'OXbOeOX4KguDoETnQlqIq7tNjxCwcWu0Pm7zIU8A', grant_type: 'password', scope: '' })

  const fetchTokens = async () => {
    await axios.post('oauth/token', data).then(response => {
      dispatch(setAuthenticationToken(response.data))
    }, err => {
      console.log(err)
    })
  }

  useEffect(() => {
    fetchTokens()
  }, [])
  return (
    <main className='page' id='Login'>
      <div className='wrapper'>
        <h3>Login</h3>
      </div>
    </main>
  )
}
