import axios from '@newrank/axios-fetch';
import { BASE_CONFIG } from './base';

const axios_interceptors = axios.create(BASE_CONFIG);

// axios_interceptors.interceptors.request.use(function(config) {
//   console.log(config)
//   return config;
// })

axios_interceptors.interceptors.response.use(function (response: any) {
  let _data: any = response.data;

  if (!_data.code && _data?.value?.code) {
    _data = response.data.value;
  }

  const isLogin = response.url.includes('/getUserInfo');

  if (_data.code !== '000000' && !isLogin) {
    return Promise.reject(_data);
  }

  _data.success = true;
  response.data = _data;

  return response;
});

export default axios_interceptors;
