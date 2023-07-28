import axios, { type AxiosRequestConfig } from 'axios';
import mpAdapter from 'axios-miniprogram-adapter';
(axios.defaults.adapter as any) = mpAdapter;

declare module 'axios' {
  interface AxiosResponse<T = any> {
    code: null;
    // 这里追加你的参数
  }
  export function create(config?: AxiosRequestConfig): AxiosInstance;
}
interface MyRequestType extends AxiosRequestConfig {
  headers?: any;
}
// TS类型限制 未配置
const http = axios.create({
  timeout: 6000,
  headers: {
    'Content-Type': 'application/json;charset:utf-8',
  },
});
// 请求拦截
http.interceptors.request.use((config: MyRequestType) => {
  config.headers['Content-Type'] = 'application/json';
  config.headers['Accept'] = 'application/json';
  // config.headers['Authorization'] = userInfo.token;  携带token
});
// 响应拦截
http.interceptors.response.use();

export { http as request };
