import axios from 'axios';

const baseURL = 'http://localhost';

const request = axios.create({ baseURL, timeout: 10000 });

request.interceptors.request.use(
  (config) => {
    // do something before request sent.
    // e.g. use token in header.

    if (config) {
      // ...
    }
    return config;
  },
  (errror) => Promise.reject(errror)
);

request.interceptors.response.use(
  (response) => {
    // do something after request

    const res = response.data;
    if (res) {
      // ...
    }
    return res;
  },
  (error) => Promise.reject(error)
);

export const httppost = (url, data) => request({ url, method: 'post', data });

export const httpget = (url, params) => request({ url, method: 'get', params });

export default request;
