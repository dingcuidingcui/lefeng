<template>
    <div class="good-box">
        <div class="title"><span>品牌专场</span></div>
        <div>
            <ul class="clearfix">
                <router-link class="load" tag="li" v-for = "good in goods"  :key = "good.id" to='/List' >
                    <a herf="javarscript:;"><img :src="good.src"></a>
                    <p class="brandInfo">{{good.name}}</p>
                </router-link>
            </ul>
        </div>
    </div>
</template>


<script>
export default {
    name: "Good",
    data(){
        return {
            goods:[]
        }
    },
    created(){
        this.getGoods()
    },
    methods: {
        getGoods(){
            this.$http.get("/static/good.json")
                .then( res => {
                    this.goods = res.data
                })
        }
    }
}
</script>


<style lang="scss" scoped>
    .title{
        width:7.5rem;
        height:0.66rem;
        line-height: 0.66rem;
        font-size:0.3rem;
        background-color:#f1f1f1;
        color:#808080
    }
    .load{
        width:7.5rem;
        height:3.9rem;
        a{
            img{
                width:100%;
                height:3.3rem;
            }
        }
        p{
            width:7.5rem;
            height:0.6rem;
            text-align: left;
            color:#808080;
            margin-left: 0.2rem;
            line-height: 0.6rem;
            font-size:0.2rem;
        }
    }

</style>
