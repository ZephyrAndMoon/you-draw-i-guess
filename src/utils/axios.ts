import Axios from 'axios'
import { Snackbar } from '@varlet/ui'

import { BASE_API_URL } from '@/config'

const axios = Axios.create({
  baseURL: BASE_API_URL,
  timeout: 20000 // 请求超时 20s
})

// 前置拦截器（发起请求之前的拦截）
axios.interceptors.request.use(
  (request) => request,
  (error) => Promise.reject(error)
)

// 后置拦截器（获取到响应时的拦截）
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status
      const msg = error.response.data.message
      Snackbar.error(`Code: ${code}, Message: ${msg}`)
    } else {
      Snackbar.error(`${error}`)
    }
    return Promise.reject(error)
  }
)

export default axios
