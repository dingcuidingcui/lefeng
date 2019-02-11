##配制vue-cli
1.全局配制  cnpm/npm i vue-cli -g
2.了解项目中每一个文件的作用
3.进入项目，安装依赖
    cd projectName
    cnpm i /npm i
    cnpm start(启动服务，如果正常，我们的项目搭建成功)
    cnpm run build(体验一下打包)
4.基础配置（自定义）
    modules  基础工具  rem
    stylesheets   基础sass文件
    components里面
        common  公共组件
        pages   单页面组件

6.common/head
    Head.vue
        font-awesome  字体图标库
    NavList.vue（下拉导航）
        数据自己写，v-for循环一下

swiper, 购物车用的是vuex,    