import axios from 'axios'
import globalStore from '../store/index'

const instance = axios.create({
  baseURL: 'http://localhost:3002/api/',
  timeout: 1000,
  headers: {
    'Authorization': localStorage.getItem('Authorization')
  }
});

const urls = {
  login: '/login',
  logout: '/private/logout'
}

function request (url, params) {
  return new Promise((resolve, reject) => {
    instance.post(url, params).then((response) => {
      console.log(response)
      if (response.headers['www-authenticate']) {
        localStorage.setItem('Authorization', response.headers['www-authenticate'])
        globalStore.setLoginStatus(true)
      }
      resolve(response.data)
    }).catch(err => {
      reject(err)
    })
  })
}

export const login = (params) => {
  return request(urls.login, params)
}

export const logout = (params) => {
  return request(urls.logout, params)
}