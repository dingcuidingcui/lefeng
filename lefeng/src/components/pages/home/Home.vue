<template>
    <div class="home-box toping">
        <Head></Head>
        <Banner></Banner>
        <shop></shop>
        <good></good>
        <foot></foot>
        <router-link to="/Shopcar" tag="div" class="cart-wrap">
            <a href="javascript:;"><i class="fa fa-shopping-cart"></i></a>
        </router-link>
    </div>
</template>


<script>
import Head from "./Head";
import Banner from "./Banner";
import Shop from "./Shop";
import Good from "./Good";
import Foot from "./Foot";
export default {
    name: "Home",
    components: { 
       Head,Banner,Shop,Good,Foot
    }
}
</script>


<style lang="scss" scoped>
    .home-box{
        width:7.5rem;
    }
    .cart-wrap{
        width:1rem;height:1rem;
        background: rgba($color: #000000, $alpha:0.5);
        z-index: 10;
        position: fixed;
        bottom:1.5rem;
        border-radius:0.1rem;
        margin-left:0.3rem;
        .fa{
            font-size: 0.8rem;
            text-align: center;
            line-height: 1rem;
            color:#fa3939;
        }
    }
</style>
