import axios from 'axios'
import * as config from '../config.js'

const ax = axios.create({
  baseURL: config.address,
  timeout: 5000
})

export default ax
