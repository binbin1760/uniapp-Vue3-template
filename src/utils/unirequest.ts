// uniapp 原生请求封装  初步封装----详细需求请见官方文档 网络板块
import { getUserInfo } from "./userData"

// 全局监控请求
uni.addInterceptor('request', {
    invoke(req) {
        console.log(req.header.Authorization);
    },
    success(req) {
        return req.data
    }
})

export function unirequest(url: string, method: any, data: any) {
    const headerConfig = {
        'Authorization': getUserInfo(),
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
    uni.request({
        url: url,
        method: method,
        data: data,
        header: headerConfig,
        success(res) {
            console.log(res.data);

        },
        fail(err) {
            console.log(err);
        }
    })

} 