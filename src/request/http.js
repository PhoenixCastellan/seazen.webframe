import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'
const service = axios.create({
  timeout: 8000,
  withCredentials:true,//携带cookie
})

// 请拦截
service.interceptors.request.use(
  (config) => {
    if (config.loading) store.commit('TOGGLE_LOADING_STATE', true)
    return config
  },
  (err) => {
    return Promise.reject(err)
  },
)

//响应拦截器
service.interceptors.response.use(
  (response) => {
    setTimeout(() => {
      store.commit('TOGGLE_LOADING_STATE', false)
    }, 300)
    //拦截响应，做统一处理
    if (response.data.code) {
      switch (response.data.code) {
        case '20001': //没权限
          location.href = `${
            process.env.VUE_APP_LOGIN_SITE
          }?RetutnUrl=${encodeURIComponent(window.location.href)}`
          break
      }
    }
    return response
  },
  (error) => {
    fail(error)
  },
)

export default {
  get(url, params = {}, config = {}) {
    console.log('params', params)
    return new Promise((resolve, reject) => {
      service({
        method: 'get',
        url,
        params,
        ...config,
      })
        .then((res) => {
          resolve(res)
          success(res)
        })
        .catch((err) => {
          fail(err)
        })
    })
  },
  post(url, params = {}, config = {}) {
    return new Promise((resolve, reject) => {
      service({
        method: 'post',
        url,
        data: params,
        ...config,
      })
        .then((res) => {
          resolve(res)
          success(res)
        })
        .catch((err) => {
          fail(err)
        })
    })
  },
}

function fail(err) {
  store.commit('TOGGLE_LOADING_STATE', false)
  Message({
    message: err.response ? err.response.data.msg : err,
    type: 'error',
    duration: '2000',
  })
}

function success(res) {
  if (!res.data.success) {
    store.commit('TOGGLE_LOADING_STATE', false)
    fail(res)
  }
}
