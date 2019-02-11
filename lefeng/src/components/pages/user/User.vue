<template>
  <div class="user-box">
    <div class="header">
      <img src="https://h5rsc-ssl.vipstatic.com/lefeng/build/f39c984d8edd5e686a2a88e59a87d886.png" alt=""/>
      <div class="user-box-l">
        <router-link to="/Login" tag="a" href="javascript:;">登录</router-link> / 
        <router-link to="/Regist" tag="a" href="javascript:;">注册</router-link>
      </div>
    </div>
    <div class="order-list">
      <div class="order-mag">
        <a href="##">我的订单</a>
        <a href="##">全部定单</a>
        <i class="fa fa-angle-right"></i>
      </div>
      <ul class="order-tab">
        <li>
          <i class="fa fa-file-text-o"></i>
          <p>待支付</p>
        </li>
        <li>
          <i class="fa fa-file-text-o"></i>
          <p>待收货</p>
        </li>
        <li>
          <i class="fa fa-file-text-o"></i>
          <p>待评价</p>
        </li>
      </ul>
    </div>
    <div class="adress-box ">
      <div class="fa fa-map-marker">
        <span>收货地区</span>
        <span>上海</span>
        <i class="fa fa-angle-right"></i>
      </div>       
    </div>
    <div class="adress-box ">
      <div class="fa fa-money">
        <span>我的优惠券</span>
        <i class="fa fa-angle-right"></i>
      </div> 
      <div class="fa fa-asterisk">
        <span>我的花粉</span>
        <i class="fa fa-angle-right"></i>
      </div>       
    </div>
    <div class="adress-box ">
      <div class="fa fa-heart">
        <span>我的收藏</span>
        <i class="fa fa-angle-right"></i>
      </div> 
      <div class="fa fa-bookmark">
        <span>浏览记录</span>
        <i class="fa fa-angle-right"></i>
      </div>       
    </div>
    <div class="adress-box ">
      <div class="fa fa-compass">
        <span>意见反馈</span>
        <i class="fa fa-angle-right"></i>
      </div> 
      <div class="fa fa-headphones">
        <span>在线客服</span>
        <i class="fa fa-angle-right"></i>
      </div>  
      <div class="fa fa-lock">
        <span>隐私政策</span>
        <i class="fa fa-angle-right"></i>
      </div>   
      <div class="fa fa-dot-circle-o">
        <span>关于乐峰</span>
        <i class="fa fa-angle-right"></i>
      </div>  
    </div>

    <div class="footbar">
      <div class="ul-box">
        <ul>
          <li>
            <a href="##">首页</a>  
          </li>
          <li>
            <a href="##">购物车</a>         
          </li>
          <li>
            <a href="https://android.myapp.com/myapp/detail.htm?apkName=com.yek.lafaso&ADTAG=mobile">客户端</a>
          </li>
        </ul>
      </div>   
      <p>联系客服 <span>400-000-1818</span></p>
      <p>Copyright © 2008-2018  Lefeng.com All Rights Reserved </p>
    </div>

  </div>
</template>



<script>
export default {
  
}
</script>


<style lang="scss" scoped>
/* @import url("../assets/css/mydoc.css"); */
.user-box {
  max-width: 7.5rem;
  margin: 0 auto;
  margin-bottom: 0.8rem;
  .header {
    width: 100%;
    height: 1.8rem;
    background: url("https://h5rsc-ssl.vipstatic.com/lefeng/build/ce0cbb137bb02dffefc5d38959e9c489.png")
      no-repeat white;
    background-size: 100%;
    img {
      max-width: 1.2rem;
      max-height: 1.2rem;
      float: left;
      display: block;
      margin: 0.3rem;
    }
    .user-box-l {
      width: 5.7rem;
      height: 1.2rem;
      text-align: left;
      float: right;
      line-height: 1.8rem;
      a {
        font-size: 0.4rem;
        text-decoration: none;
        color: black;
      }
    }
  }
  .order-list {
    width: 100%;
    height: 2.05rem;
    background: white;
    .order-mag {
      width: 100%;
      height: 0.9rem;
      line-height: 0.9rem;
      text-align: left;
      position: relative;
      border-bottom: 1px solid #ccc;
      a {
        text-decoration: none;
        color: black;
        margin: 0 0.5rem;
      }
      i {
        position: absolute;
        right: 0rem;
        width: 0.5rem;
        height: 0.9rem;
        line-height: 0.9rem;
      }
    }
  }
  .order-tab {
    width: 100%;
    height: 1.09rem;
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
    li {
      height: 1.09rem;
      color: #000000;
      i {
        font-size: 0.4rem;
        width: 0.45rem;
        height: 0.45rem;
        display: block;
        margin-top: 0.2rem;
        margin-left: 0.3rem;
        color: deeppink;
      }
      p {
        width: 1rem;
        height: 0.5rem;
      }
    }
  }
  .adress-box {
    padding: 0 0.3rem;
    width: 7.5rem;
    font-size: 0.4rem;
    text-align: left;
    position: relative;
    background: white;
    margin-top: 0.2rem;
    .fa {
      position: relative;
      width: 100%;
      height: 1.04rem;
      line-height: 1.04rem;
      border-bottom: 1px solid #ccc;
      color: #808080;
      span {
        width: 1rem;
        font-size: 0.3rem;
        margin-left: 0.1rem;
        color: #000000;
      }
      :nth-child(2) {
        float: right;
        margin-right: 0.7rem;
      }
      i {
        position: absolute;
        right: 0;
        line-height: 1.04rem;
        display: inline-block;
        width: 0.1rem;
      }
    }
  }
  .footbar {
    width: 7.5rem;
    height: 1.8rem;
    .ul-box{
      width:4.5rem;
      height: 0.48rem;
      margin-left: 1.5rem;
      margin-top: 0.5rem;
      ul {
      width: 100%;
      height: 0.48rem;
      display: flex;
      justify-content: space-around;
      li {
        height: 0.48rem;
        line-height: 0.48rem;
        a {
          text-decoration: none;
          color: black;
          font-size: 0.3rem;
        }
      }
    }
    }
    
    p {
      width: 7.5rem;
      height: 0.48rem;
      text-align: center;
      span {
        color: red;
      }
    }
  }
}
</style>
