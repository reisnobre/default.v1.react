const env = process.env.NODE_ENV

export const clientId = '2'

export const clientSecret = (conn) => {
  if (conn === 'prod') {
    return env === 'production' ? '' : 'OXbOeOX4KguDoETnQlqIq7tNjxCwcWu0Pm7zIU8A'
  } else {
    return env === 'production' ? '' : ''
  } 
}

