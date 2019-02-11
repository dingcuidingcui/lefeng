<template>
    <div detail-box>
        <div class="details">
            <ul>
                <li >
                    <div> <img :src="lists.src" alt=""> </div>
                    <div class="title">
                        <p> {{lists.title}} </p>                
                        <p> {{lists.describe}} </p>
                    </div>    
                    <div class="price">
                        <p> {{lists.price}} </p>
                        <p> {{lists.price1}} </p>
                        <p :class='lists.car' @click="addCar({
                            id:lists.id,
                            src:lists.src,
                            title:lists.title,
                            price:lists.price

                        })"></p>                                      
                    </div> 
                    <div class="pms-tips">
                        <p> {{lists.free}} </p>
                        <p> {{lists.pollen}} </p>    
                    </div>   
                    <div class="message">
                        <h3> {{lists.news}} </h3>   
                        <table>
                            <tbody>
                                <tr><th>{{lists.brand}}</th><td>{{lists.brands}}</td></tr>
                                <tr><th>{{lists.name}}</th><td>{{lists.names}}</td></tr>
                                <tr><th>{{lists.deta}}</th><td>{{lists.detas}}</td></tr>
                                <tr><th>{{lists.term}}</th><td>{{lists.terms}}</td></tr>
                                <tr><th>{{lists.spec}}</th><td>{{lists.specs}}</td></tr>
                                <tr><th>{{lists.no}}</th><td>{{lists.nos}}</td></tr>       
                            </tbody>
                        </table>    
                    </div>            
                </li>
            </ul>
        </div>
        <router-link to="/Shopcar" tag="div" class="cart-wrap">
            <a href="javascript:;"><i class="fa fa-shopping-cart"></i></a>
        </router-link>
        <router-link to="/Home" class="icon-home">
            <a href="javascript:;"><i class="fa fa-home"></i></a>
        </router-link>
    </div>
</template>


<script>
import {mapActions} from "vuex";
export default {
  name: "Detail",
  data() {
    return {
      lists: {},
     
    };
  },
  methods: {
    ...mapActions(['addCar'])
  },
  mounted(){
    let listId = this.$route.query.id;
    this.$http({
        url:"/static/list.json"
      }).then(
        res=>{       
          this.lists=res.data[listId-1]     
        }
      )
  },
};
</script>


<style lang="scss" scoped>
.details {
  width: 7.5rem;
  height: auto;
  background: #f0f0f0;
  overflow: hidden;
  ul {
    width: 7.5rem;
    li {
      box-sizing: border-box;
      width: 7.5rem;
      float: left;
      margin-bottom: -1px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.12);
      border-right: 1px solid rgba(0, 0, 0, 0.12);
      img {
        width: 100%;
        height: 8.5rem;
        background: white;
      }
      .title {
        width: 7.5rem;
        height: 0.5rem;
        background: white;
        margin-top: -0.1rem;
        p:nth-child(1) {
          color: #000000;
          width: 2rem;
          height: 0.5rem;
          float: left;
          text-align: left;
          font-size: 0.35rem;
          background: white;
          margin-left: 0.3rem;
        }
        p:nth-child(2) {
          height: 0.5rem;
          width: 5rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: #909090;
          font-size: 0.35rem;
        }
      }
      .price {
        width: 7.5rem;
        height: 1rem;
        box-sizing: border-box;
        background: white;
        p:nth-child(1) {
          width: 1.5rem;
          font-size: 0.45rem;
          color: #000000;
          float: left;
          margin-left: 0.3rem;
        }
        p:nth-child(2) {
          width: 0.6rrem;
          color: #909090;
          float: left;
          text-decoration: line-through;
          font-size: 0.4rem;
          margin: 0.1rem 0 0 0.3rem;
        }
        p:nth-child(3) {
          width: 1.2rem;
          font-size: 0.65rem;
          float: right;
          margin: 0.1rem 1rem 0 0;
        }
      }
    }
  }
}
.pms-tips {
  width: 7.5rrem;
  height: 1.44rem;
  p {
    width: 7.5rem;
    height: 0.6rem;
    line-height: 0.6rem;
    font-size: 0.3rem;
    text-align: left;
    color: #000000;
    margin-top: 0.15rem;
    padding-left: 0.2rem;
    background: white;
  }
}
.message {
  width: 7.5rem;
  height: 7.8rem;
  background: white;
  margin-top: 0.3rem;
  h3 {
    width: 7.5rem;
    height: 0.8rem;
    line-height: 0.8rem;
    color: red;
    font-size: 0.35rem;
  }
  table {
    width: 7rem;
    height: 7rem;
    margin-left: 0.25rem;
    margin-bottom: 0.5rem;
    tr {
      width: 6rem;
      height: 0.8rem;
      border: 0.02rem solid #b0b0b0;
      th {
        border-right: 0.02rem solid #b0b0b0;
        background: #e0e0e0;
        width: 1.24rem;
        padding-left: 0.2rem;
        color: #000000;
        font-size: 0.25rem;
      }
      td {
        width: 4.8rem;
        padding-left: 0.2rem;
        text-align: left;
        color: #000000;
        font-size: 0.25rem;
      }
    }
  }
}
.cart-wrap {
  width: 1rem;
  height: 1rem;
  background: rgba($color: #000000, $alpha: 0.5);
  z-index: 10;
  position: fixed;
  bottom: 1.5rem;
  border-radius: 0.1rem;
  margin-left: 0.3rem;
  .fa {
    font-size: 0.8rem;
    text-align: center;
    line-height: 1rem;
    color: #fa3939;
  }
}
.icon-home {
  width: 1rem;
  height: 1rem;
  background: rgba($color: #000000, $alpha: 0.5);
  z-index: 10;
  position: fixed;
  bottom: 1.5rem;
  right: 0.5rem;
  border-radius: 0.1rem;
  .fa {
    font-size: 0.8rem;
    text-align: center;
    line-height: 1rem;
    color: #e0e0e0;
  }
}
</style>


