import axios from 'axios'
import * as config from '../config.js'
import queryString from 'queryString'

const ax = axios.create({
  baseURL: config.address,
  timeout: 5000
})

ax.interceptors.request.use(config => {
  if (config.method === 'post' ||
      config.method === 'put' ||
      config.method === 'delete' ||
      config.method === 'patch'
  ) {
    config.data = queryString.stringify(config.data)
  }
  return config
}, error => {
  return Promise.reject(error)
})

export default ax
