import axios from '@newrank/axios-fetch';

const apiHost =
  REACT_APP_ENV === 'pro' ? 'https://gw.newrank.cn/api' : 'http://test-gw.newrank.cn:18080/api';

const N_TOKEN = '64611db3039a4c3caf798adb7a8d1b35';

export const BASE_CONFIG = {
  baseURL: apiHost,
  withCredentials: true,
  headers: {
    'N-Token': N_TOKEN,
  },
  timeout: 5000,
};

export { apiHost, N_TOKEN };

export default axios.create(BASE_CONFIG);
