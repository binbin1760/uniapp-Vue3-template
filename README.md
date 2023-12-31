### uniapp+Vue3 基础模板

        一个简单的模板

#### 1.vite 配置插件有

        自动引入  和 按需引入组件

#### 2.已经配置好 eslint 和 prettier 对代码进行规范

        pretter需要配合vscode的Prettier-Code formatter插件使用

#### 3.国际化 vue-i18n (没有配置，需要的话按项目配置即可)

#### 4.目录结构都很常规需要说明的是

        1.我将所有的.d.ts文件全部放在了dts文件夹中，并没有放在根目录下
        2.eslintrc-auto-import.json 配置文件是为了解决eslint与pretter 冲突的问题
        3.pretterrc.js文件是配置文件是配置代码风格文件
        4.eslintrc.js 代码规范配置，其中lint 指令是检查代码，lint：fix 是修复代码
        5.所有静态资源必须放在static文件夹下面，否者只有import后的静态资源才会被编译
        6.utils下的userData 保存的是用户token相关信息，userinfo保存的是用户微信头像和名字
        7.utils/request    axios封装
        8.utils/unirequest  原生网络请求封装
        9.mock/mock   mock封装 （未进行细化封装）

#### 5.uniapp+vue3+vite 写微信小程序缺陷与一些说明

        1.appid无法编译到微信模拟器中，这在做微信登录的时候一定要注意
        2.uniapp+axios 编写微信小程序问题：
                1.小程序网络请求不支持axios
                2.如果一定要用axios，请下载适配器插件axios-miniprogram-adapter
                3.高版本axios+适配器插件，不支持自定请求头。
                解决方案，安装指定版本(该模版已经采用)：
                axios: "^0.26.0",
                axios-miniprogram-adapter": "^0.3.4",
        3.生产环境和开发环境编译后的代码运行结果可能会有所区别，所以这里建议直接使用生成环境进行开发，只需要在.env里面修改VITE_BASE_URL来区分是开发还是上线
        4.获取用户信息的方式
                微信官方以及调整了获取用户昵称和头像的方式 详情见：https://developers.weixin.qq.com/community/develop/doc/000cacfa20ce88df04cb468bc52801
                由于微信官方的调整，所以以往的api都不可用了所以有以下两种方案
                1.只是获取用户信息用于展示的话请用 <open-data>组件，具体请看uniapp官方文档
                2.如果是获取用户信息的值的话
                        使用input组件 将type设置为nickname 即可获取用户微信昵称
                        使用button组件 将open-type设置为chooseAvatar  在通过@chooseavatar 获取用户头像信息
