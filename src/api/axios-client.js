import axios from 'axios';

// const URL = 'http://192.168.199.242:8080';
const URL = 'http://localhost:8080';

const axiosClient = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
// Interceptors
// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // if (error.response?.status === 401) {
    //   // clear token ...
    //   localStorage.removeItem('token');
    //   window.location.replace('/');
    // }

    return Promise.reject(error);
  },
);

export default axiosClient;
