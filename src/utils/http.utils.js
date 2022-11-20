import axios from 'axios';

import config from '@config';

export const initHttp = () => {
  let http = null;

  return () => {
    if (http) {
      return http;
    }

    http = axios.create({
      baseURL: config.BASE_URL,
    });

    http.interceptors.request = requestConfig => {
      return requestConfig;
    };

    http.interceptors.response = response => {
      return response;
    };

    return http;
  };
};
