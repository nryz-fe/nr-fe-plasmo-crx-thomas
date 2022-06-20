import md5 from 'blueimp-md5';
import axios from '@newrank/axios-fetch';
import { N_TOKEN } from './base';

interface Data {
  nonce?: string;
  xyz?: string;
  [propName: string]: any;
}

function setXYZ(url: string, data: Record<string, any> = {}) {
  let code = `${url}?AppKey=joker`;
  let newParams: Data = { xyz: '', nonce: '' };

  Object.keys(data)
    .sort()
    .forEach((key) => {
      const value = data[key] === null || typeof data[key] === 'undefined' ? '' : data[key];
      newParams[key] = value;
      code += `&${key}=${value}`;
    });

  const nonce = Math.random().toString(16).slice(-9);
  code += `&nonce=${nonce}`;

  newParams.nonce = nonce;
  newParams.xyz = md5(code);
  return newParams;
}

const axios_form = axios.create({
  baseURL: '',
  withCredentials: true,
  headers: {
    'N-Token': N_TOKEN,
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  transformRequest: [
    function (data) {
      return new URLSearchParams(data);
    },
  ],
});

axios_form.interceptors.request.use((config) => {
  const conf = config;
  if (conf.method?.toLowerCase() === 'post') {
    conf.data = setXYZ(conf.url!, conf.data);
  }
  if (conf.method?.toLowerCase() === 'get') {
    conf.params = setXYZ(conf.url!, conf.params);
  }

  return conf;
});

export default axios_form;
