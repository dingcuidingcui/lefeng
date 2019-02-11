<template>
    <div class="shop-box">
        <!-- <router-link to="/List"> -->
            <router-link to="/List" class="img-wraper" v-for = "shop in shops"
                :key = "shop.id">
                <img :src="shop.src" alt="">
            </router-link>
        <!-- </router-link> -->
    </div>
</template>


<script>
import Vue from "vue"
export default {
    name: "Shop",
    data(){
        return {
            shops: []
        }
    },
    created(){
        this.getShops()
    },  
    methods: {
        getShops(){
            this.$http.get("/static/shop.json")
                .then( res => {
                     this.shops = res.data
                })
        }
    }
}
</script>


<style lang="scss" scoped>
    .shop-box{
        width:7.5rem;
        height:2rem; 
        display:flex; 
        .img-wraper{
            width:1.485rem;
            height:2rem;
            img{
                width:100%;
                height:100%;
                }
            }         
    }
</style>
