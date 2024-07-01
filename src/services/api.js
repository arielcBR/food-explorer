import axios from 'axios'

const URL_SERVER = 'http://localhost:4000'

export const api = axios.create({
  baseURL: URL_SERVER
})
