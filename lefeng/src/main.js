// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//全局配制
import Vue from 'vue'
import App from './App'

import store from "./store"

//配制全局的swiper
import Swiper from 'swiper'
import "../node_modules/swiper/dist/css/swiper.css"

//配制全局的基础sass环境
import "./stylesheets/main.scss"

//配置全局的请求axios
import axios from "axios"
Vue.prototype.$http = axios


//配置全局的rem
import "./modules/rem"

//配制全局的字体图标库
import "../static/font-awesome-4.7.0/css/font-awesome.css"

//引入路由
import router from "./router.config";


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
















/* 
 
                       .::::. 
                     .::::::::. 
                    :::::::::::  I want to say... 
                ..:::::::::::' 
              '::::::::::::' 
                .:::::::::: 
           '::::::::::::::.. 
                ..::::::::::::. 
              ``:::::::::::::::: 
               ::::``:::::::::'        .:::. 
              ::::'   ':::::'       .::::::::. 
            .::::'      ::::     .:::::::'::::. 
           .:::'       :::::  .:::::::::' ':::::. 
          .::'        :::::.:::::::::'      ':::::. 
         .::'         ::::::::::::::'         ``::::. 
     ...:::           ::::::::::::'              ``::. 
    ```` ':.          ':::::::::'                  ::::.. 
                       '.:::::'                    ':'````.. 
 
 
*/  