### uniapp+Vue3 基础模板

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

#### 5.uniapp+vue3+vite 写微信小程序缺陷

        1.底部导航Tabbar 图标无法编编译 导致项目报错，解决方法手动编译
        2.appid无法编译到微信模拟器中，这在做微信登录的时候一定要注意
