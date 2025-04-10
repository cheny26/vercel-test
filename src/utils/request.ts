import axios from 'axios'

const Axios = axios.create({
  baseURL: 'http://localhost:8080/api',
  timeout: 10000,
  withCredentials: true
})

//请求拦截器
Axios.interceptors.request.use(
  function (config) {
    console.log('请求为', config)
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

//响应拦截器
Axios.interceptors.response.use(
  function (response) {
    console.log('响应为', response)
    const { data } = response
    // 未登录
    if (data.code === 40100) {
      // 不是获取用户信息接口，或者不是登录页面，则跳转到登录页面
      if (
        !response.request.responseURL.includes('user/get/login') &&
        !window.location.pathname.includes('/login')
      ) {
        localStorage.setItem('USER-INFO', '{}')
        window.location.href = `/login?redirect=${window.location.href}`
      }
    }
    if (data.code != 0) {
      ElMessage.error(data.message)
    }
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)

export default Axios
