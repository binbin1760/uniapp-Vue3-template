// 随意配置  测试请求封装是否成功-----详细配置请见https://github.com/nuysoft/Mock/wiki/Getting-Started
import mock from 'better-mock/dist/mock.mp'

// mock.setup({
//     timeout: 6000,
// })

mock.mock('/api/test', 'GET', {
    code: 200,
    data: {
        text: "成功"
    },
    message: '请求成功',
})