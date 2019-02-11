<template>
    <div class="product-list-box">
        <div class="img-box">
            <span></span>
        </div>
        <div class="plugin">
            <div class="plugin-box">

            </div>
        </div>
        <div class="broker-box">
            <div class="broker-img">

            </div>
        </div>
        <div class="price-borker-box">
            <div class="price-box">

            </div>
        </div>
        <div class="active-list img-background">
            <router-link to="/List"><a href="" class="list-box img-background" v-for="list in activeList" :key="list.broundId">
                <img :src=list.url alt="">
                                
                <div class="promotion-wrap">
                    <p>{{list.brandName}}</p>
                    <div class="promotion">
                        <p>{{list.promotion}}</p>
                    </div>
                    <p class="car-btn">立即抢购</p>
                </div>
              </a>    
            </router-link>      
        </div>
        <router-link to="/Home" class="icon-home">
            <a href="javascript:;"><i class="fa fa-home"></i></a>
        </router-link>
    </div>
</template>
<script>
export default {
    // https://h5rsc.vipstatic.com/json/2018/09/20/14/1537426674_VIP_SH.js?callback=excel2json&_=1542424872352
  name: "Active",
  data(){
      return {
          activeList: []
      }
  },
  created(){
      this.getActiveList()
  },
  methods: {
      getActiveList(){
          this.$http.get("/static/active-list.json")
          .then(res => {
        this.activeList = res.data;
      
        
      })
      }
  }
};
</script>


<style lang="scss" scoped>
.product-list-box {
  width: 7.5rem;
  height: auto;
  .img-box {
    width: 100%;
    height: 2.48rem;
    border: 1px solid white;
    span {
      display: block;
      background: url("https://b.appsimg.com/upload/mst/2018/02/07/123/ae98b8e1fb4a79d4f252f9d5b4f999dc.jpg")
        no-repeat;
      background-size: 100%;
      width: 100%;
      height: 100%;
    }
  }
  .plugin {
    width: 100%;
    height: 0.61rem;
    border: 1px solid white;
    .plugin-box {
      width: 100%;
      height: 100%;
      background: url("https://b.appsimg.com/upload/mst/2018/08/30/110/0582d12a3b4f02b03ae3be645e0e4729.jpg")
        no-repeat;
      background-size: 100%;
    }
  }
  .broker-box {
    width: 100%;
    height: 1.93rem;
    border: 1px solid white;
    .broker-img {
      width: 100%;
      height: 100%;
      background: url("https://b.appsimg.com/upload/mst/2018/09/11/32/20f9ddfc84dd09515da6298ef2df6c11.jpg")
        no-repeat;
      background-size: 100%;
    }
  }
  .price-borker-box {
    width: 100%;
    height: 0.59rem;
    border: 1px solid white;
    .price-box {
      width: 100%;
      height: 100%;
      background: url("https://b.appsimg.com/upload/mst/2018/02/07/127/7f3ffaefb0d992fb68e1640d051c1de6.jpg")
        no-repeat;
      background-size: 100%;
    }
  }
  .active-list {
    background: rgb(135, 38, 226);
    width: 7.5rem;
    height: auto;
    overflow: hidden;
    .list-box {
      margin: 0.12rem;
      text-decoration: none;
      color:black;
      display: block;
      width: 3.45rem;
      height: 4.73rem;
      float: left;
      img {
        width: 100%;
        height: 3.33rem;
      }

      .promotion-wrap {
        width: 100%;
        height: 1.32rem;
        background: white;
        p {
          margin-top: 0.01rem;
          font-weight: bolder;
          text-align: center;
          height: 0.4rem;
          line-height: 0.4rem;
          color: black;
          font-size:0.28rem;
        }
        .promotion{
            width: 100%;
            height: 0.56rem;
            text-align: center;
            p{
                height:100%;
                line-height: 0.56rem;
                color: red;

            }
        }
        .car-btn{
            height: 0.36rem;
            line-height: 0.36rem;
            background:red;
            color: white;
        }
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
        border-radius:0.1rem;
        .fa{
            font-size: 0.8rem;
            text-align: center;
            line-height: 1rem;
            color:#e0e0e0;
        }
    }
}
</style>
