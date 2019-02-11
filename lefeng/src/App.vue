<template>
  <div id="app">
    <!-- <Head></Head> -->
    <!-- <Home></Home> -->
    <!-- <User></User> -->
    <!-- <Search></Search> -->
    <!-- <List></List> -->
    <!-- <Active></Active> -->
    <!-- <Login></Login> -->
    <!-- <Regist></Regist> -->
    <!-- <Detail></Detail> -->
    <!-- <Shopcar></Shopcar> -->
    <!-- <Error></Error> -->
    <router-view></router-view>
  </div>
</template>

<script>
//导入其他一些组件
import Home from "./components/pages/home/Home";
import Search from "./components/pages/search/Search";
import User from "./components/pages/user/User";
import List from "./components/pages/list/List";
import Active from "./components/pages/active/Active";
import Login from "./components/pages/login/Login";
import Regist from "./components/pages/login/Regist";
import Detail from "./components/pages/detail/Detail";
import Shopcar from "./components/pages/shopcar/Shopcar";
import Error from "./components/pages/error/Error";


import { mapActions } from 'vuex';
export default {
  name: 'App',
  components: {
    // Head,,Search,Home,List,Active,Login,Regist,Detail,Shopcar,Error
  },
  created(){
    this.initCar();
  },
  methods: {
    ...mapActions(['initCar'])
  }
}
</script>

<style lang="scss">
$color:red;
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color;
  width:7.5rem;
  overflow:hidden;
}
</style>
  

