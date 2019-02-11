<template>
    <div class="foot-box">
        <ul>
            <router-link tag="li" to="/Home" class="fa fa-clock-o"><p>特卖</p></router-link>
            <router-link tag="li" to="/Active" class="fa fa-money"><p>领券</p></router-link>
            <router-link tag="li" to="/Shopcar" class="fa fa-shopping-cart"><p>购物车</p></router-link>
            <router-link tag="li" to="/User" class="fa fa-user-o"><p>我的蜂巢</p></router-link>
        </ul>
    </div>
</template>


<script>
export default {
    
}
</script>


<style lang="scss" scoped>
    .foot-box{
        width:7.5rem;
        height:1rem;
        display: flex;
        position:fixed; 
        justify-content: space-around;
        bottom: 0;
        background:white;
        ul{
            width:100%;height: 100%;
            .fa{
                font-size:0.5rem;
                color:#7e7a7c;
            }
            li{
                width:1.8rem;height:1rem;
                font-size:0.3rem;
                p{
                    margin-top: 0.1rem;
                    font-size:0.3rem;
                    color:#000000;
                }
            }
        }
    }
</style>



