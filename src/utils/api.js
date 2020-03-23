import axios from 'axios'
import { header } from './auth'

axios.defaults.baseURL = 'https://api.example.com'

const env = process.env.NODE_ENV

const dev = {
  master: 'http://localhost:8000',
  beta: 'http://localhost:8000'
}
const prod = {
  master: 'https://back.backup.techmobil.com.br',
  beta: 'http://localhost:8000'
}

if (env === 'production') {
  axios.defaults.baseURL = `${prod.prod}`
} else {
  axios.defaults.baseURL = `${dev.prod}`
}

export default (options = null) => {
  let baseURL = env === 'production' ? `${prod.master}` : `${dev.master}`
  const secure = options.secure === undefined ? true : options.secure

  if (secure) {
    baseURL += '/api/v1/'
  }
  const instance = axios.create({
    baseURL: baseURL,
    responseType: 'json'
  })

  instance.interceptors.request.use(config => {
    if (config.url.includes('api/v1')) {
      config.headers = header()
    }

    return config
  }, err => {
    return Promise.reject(err)
  })

  instance.interceptors.response.use(response => {
    return response
  }, err => {
    return Promise.reject(err)
  })

  return instance
}
