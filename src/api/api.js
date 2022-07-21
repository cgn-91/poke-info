import qs from 'qs'
import axios from 'axios/index'
import router from '../router'

const BASE_URL = process.env.API_URL

const init = function () {
  axios.defaults.baseURL = BASE_URL
  axios.defaults.paramsSerializer = params => qs.stringify(params, { arrayFormat: 'repeat', skipNulls: true })

  const hayToken = ((localStorage.token != null) && (localStorage.token !== undefined))
  if (hayToken) {
    axios.defaults.headers.common.Authorization = 'Bearer ' + localStorage.token
  }

  axios.interceptors.response.use(r => r, error => {
    if (!error.response) {
      return Promise.reject(error)
    }

    const status = error.response.status
    if (status === 401) {
      localStorage.removeItem('token')
      axios.defaults.headers.common.Authorization = null
      router().push({ name: 'Index' })
    }

    return Promise.reject(error)
  })
}

export { BASE_URL, init }
