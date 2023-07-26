import axios from "axios";
// TS类型限制 未配置
const http = axios.create({
    timeout: 6000,
    headers: {
        "Content-Type": 'application/json;charset:utf-8'
    }
})
// 请求拦截
http.interceptors.request.use()
// 响应拦截
http.interceptors.response.use()

export { http as request }