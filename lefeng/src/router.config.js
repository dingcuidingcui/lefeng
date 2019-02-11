import Vue from "vue";

//1.引入路由
import VueRouter from "vue-router";

//2.安装，注册到全局（router-link）
Vue.use(VueRouter);

import Home from "./components/pages/home/Home";
import Search from "./components/pages/search/Search";
import Active from "./components/pages/active/Active";
import Foot from "./components/pages/home/Foot";
import User from "./components/pages/user/User";
import List from "./components/pages/list/List";
import Detail from "./components/pages/detail/Detail";
import Shopcar from "./components/pages/shopcar/Shopcar";
import Login from "./components/pages/login/Login";
import Regist from "./components/pages/login/Regist";
import Error from "./components/pages/error/Error";



//3.数组配制
let routes = [
    {path:"/Home",component:Home},
    {path:"/Search",component:Search},
    {path:"/Active",component:Active},
    {path:"/Foot",component:Foot},
    {path:"/User",component:User},
    {path:"/List",component:List},
    {path:"/Detail",component:Detail},
    {path:"/Shopcar",component:Shopcar},
    {path:"/Login",component:Login},
    {path:"/Regist",component:Regist},
    {path:"/",component:Home},
    {path:"*",component:Error},
];


//4.创建路由对象
// let router = new router({
//     mode:"history", (非哈希模式的路由)

//     //routes:数组配制
//     //routes:routes (这种样式可以省略成一个)
//     routes
// });

//5.输出路由
export default new VueRouter({routes});