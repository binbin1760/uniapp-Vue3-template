import axios, { type AxiosRequestConfig } from 'axios';
import mpAdapter from 'axios-miniprogram-adapter';
(axios.defaults.adapter as any) = mpAdapter;

/*
 *问题描述：
 1.axios本身不适配uniapp小程序 以及原生的微信小程序的 
 2.需要自己下载适配器adapter
 3.很多高版本的axios 与适配器 适配成功后无法自定义请求头
 4.解决 第3点问题的方法：
    1.下载指定版本的axios 与 axios-miniprogram-adapter  --- 版本号看 配置文件package.json
    2.如果想使用高版本axios  同时也想自定义请求头有  那么建议自己写适配器----适配uni.request()
 * 
 * 
 */
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
