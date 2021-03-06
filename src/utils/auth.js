import { clientId, clientSecret } from '../.env.js'

const client = conn => {
  return {
    client_id: clientId,
    client_secret: clientSecret(conn)
  }
}

const header = () => {
  const authTokens = JSON.parse(window.localStorage.getItem('authTokens'))
  if (authTokens) {
    const headers = {
      Accept: 'application/json',
      Authorization: 'Bearer ' + authTokens.access_token
    }
    return headers
  }
  return {}
}
export {
  client,
  header
}
