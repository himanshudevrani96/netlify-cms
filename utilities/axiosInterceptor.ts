import axios from 'axios'
import { BASE_URL } from 'config/constant'

const baseURL = BASE_URL
const headers = { 'Content-type': 'application/json; charset=UTF-8' }

// Global axios defaults
// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//Custom instance defaults
export const axiosInstance = axios.create({
  baseURL,
  headers,
})

// Override timeout default for the library
// Now all requests using this instance will wait 2.5 seconds before timing out
// axiosInstance.defaults.timeout = 2500

// Add a request interceptor

axiosInstance.interceptors.request.use(
  config => {
    // This Entire logic will be executed before the api call
    // Do something before request is sent
    // You can add here jwt token to the request or you can remove
    // you can also check the jwt life time before making an api request
    // You can add dynamic headers

    return config
  },
  error => {
    // Do something with request error
    return Promise.reject(error)
  },
)

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // This Entire logic will be executed once you receive the info from the api call
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  },
)

/***
 * //**********************************************************************************************************
 * //******** REFER THIS CODE FOR APPLYING JWT ACCESS TOKEN WITH EXPIRATION ***********************************
 *  
 * import axios from ‘axios’
import { toastMessage } from ‘../../helpers/util’
import moment from ‘moment’
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL
axios.defaults.headers.post[‘Content-Type’] = ‘application/json’
//Custom instance defaults
export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL,
})
// Override timeout default for the library
// Now all requests using this instance will wait 2.5 seconds before timing out
// axiosInstance.defaults.timeout = 2500
// Add a request interceptor
axiosInstance.interceptors.request.use(
  async (config: any) => {
    // This Entire logic will be executed before the api call
    // Do something before request is sent
    // You can add here jwt token to the request or you can remove
    // you can also check the jwt life time before making an api request
    // You can add dynamic headers
    const accessToken: string | null = JSON.parse(localStorage.getItem(‘accessToken’) || ‘{}‘)
    const expirationDate: string | null = JSON.parse(localStorage.getItem(‘tokenExpiry’) || ‘{}‘)
    if (
      config.url === ‘/user’ ||
      config.url === ‘/user/verify-signature’ ||
      config.url === ‘/user/generate-nonce’
    ) {
      return config
    } else if (!accessToken) {
      return {
        Success: false,
        Message: ‘No Access Token’,
        Entities: config,
      }
    } else if (accessToken) {
      const currentTimeInSeconds = Date.now()
      const isExpired = Number(expirationDate) < Number(currentTimeInSeconds)
      if (isExpired) {
        toastMessage(‘error’, ‘Session Expired, Please Login Again’)
        window.location.href = ‘/’
        return config
      } else {
        if (
          config.method === ‘post’ ||
          config.method === ‘get’ ||
          config.method === ‘patch’ ||
          config.method === ‘put’ ||
          config.method === ‘delete’
        ) {
          config.headers.Authorization = `Bearer ${accessToken}`
          return config
        } else {
          return config
        }
      }
    }
  },
  error => {
    // Do something with request error
    return Promise.reject(error)
  },
)
// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // This Entire logic will be executed once you receive the info from the api call
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  },
)
 */
