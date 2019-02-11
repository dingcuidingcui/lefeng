<template>
    <div class="login-box">
      <form action="get" class="form-box">
          <input type="text" id="user" placeholder="以验证手机/用户名/邮箱"  class="input-box">
          <input type="number" id="password" placeholder="密码">
          <p class="inp"><input type="checkbox" name="check" class="check-box"> 一个月内免登陆</p>
          <button class="btn-box">
              登陆
          </button>
          <p class="method-box">
              <router-link to="/Regist"><a href="JavaScript:;">立即注册</a></router-link>
              <a href="JavaScript:;">忘记密码</a>
          </p>
      </form>
      <router-link to="/Home" class="icon-home">
            <a href="javascript:;"><i class="fa fa-home"></i></a>
      </router-link>
    </div>
</template>

<script>
export default {
  neme: "Login"
};
</script>


<style lang="scss" scoped>
.login-box {
  width: 7.5rem;
  height: 5rem;
  margin-top: 0.8rem;
  .form-box {
    width: 100%;
    height: 100%;
    input {
      display: block;
      width: 6.2rem;
      height: 0.84rem;
      margin-left: 0.37rem;
      background:#e0e0e0;
      border: none;
      padding-left:0.4rem;
      font-size:0.35rem;
      border:1px solid #909090
    }
    .inp{
       line-height:1rem;
    }
    p {
      width: 100%;
      height: 1rem;
      text-align: left;      
      .check-box {
        display: inline-block;
        border-radius: 0.3rem;
        width: 0.3rem;
        height: 0.3rem;
      }
    }
    .btn-box{
        width: 6.75rem;
        height: 0.9rem;
        color: white;
        background: #ff0056;
        border: none;
      }
    .method-box{
        width: 6.75rem;
        height: 0.3rem;
        text-align: right;
        margin-top:0.5rem;
        line-height: 0.3rem;
        a{
            text-decoration: none;
            color: #3195cb;
        }
    }
  }
   .icon-home{
        width:1rem;height:1rem;
        background: rgba($color: #000000, $alpha:0.5);
        z-index: 10;
        position: fixed;
        bottom:1.5rem;
        right:0.5rem;
        border-radius:0.5rem;
        .fa{
            font-size: 0.8rem;
            text-align: center;
            line-height: 1rem;
            color:#e0e0e0;
        }
    }
}
</style>
